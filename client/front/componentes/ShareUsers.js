import { useEffect, useState } from "react";
import { Keyboard, View, Text, StyleSheet, Button, Alert } from "react-native";
import axios from "../axios/axios";

const ShareUsers = ({ id, title, completed }) => {
  const [author, setAuthor] = useState({ username: "" });
  const [sharedWith, setSharedWith] = useState([]);
  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const response = await axios.get(`todos/share/${id}`);

    const { author, shared_with } = await response.data;

    setAuthor(author);
    setSharedWith(shared_with);
  };

  return (
    <View style={[styles.contentContainer]}>
      <Text style={[styles.title, { marginBottom: 20 }]}>Shared Tasks</Text>
      <Text style={[styles.title, { marginBottom: 20 }]}>"{title}"</Text>
      <Text style={[styles.title]}>Status</Text>
      <View
        style={[
          styles.status,
          { backgroundColor: completed === 1 ? "#4ade80" : "#f87171" },
        ]}
      >
        <Text style={[styles.title, { color: "white" }]}>
          {completed === 1 ? "Completed" : "Incompleted"}
        </Text>
      </View>
      <Text style={[styles.description]}>PARTICIPANTS</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.participant}>
          <Text style={[styles.description, { color: "white" }]}>
            {author.username}
          </Text>
        </View>
        {sharedWith.map((user, index) => (
          <View style={styles.participant} key={index}>
            <Text style={[styles.description, { color: "white" }]}>
              {user.username}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ShareUsers;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  title: {
    fontWeight: "900",
    letterSpacing: 0.5,
    fontSize: 16,
    textAlign: "center",
  },
  description: {
    color: "#56636F",
    fontSize: 13,
    fontWeight: "900",
    color: "black",
  },
  participant: {
    backgroundColor: "#8b5cf6",
    padding: 5,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 20,
    fontWeight: "900",
    color: "white",
  },
  input: {
    borderWidth: 2,
    borderColor: "#00000020",
    padding: 15,
    borderRadius: 15,
    marginVertical: 15,
  },
  status: {
    padding: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 20,
    borderRadius: 20,
    fontWeight: "900",
    color: "white",
  },
});
