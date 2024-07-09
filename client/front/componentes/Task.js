import * as React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import useDeleteTodo from "../hooks/useDeleteTodo";
import axios from "../axios/axios";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import ShareUsers from "./ShareUsers";
import ShareTodo from "./ShareTodo";

const CheckMark = ({ id, completed, toggleTodo }) => {
  const toggle = async () => {
    try {
      const response = await axios.put("todos/toggle", {
        id: id,
        complete: completed ? false : true,
      });

      const data = await response.data;
      toggleTodo(id);
    } catch (error) {
      alert("Error al actualizar la tarea");

      console.error(error.message);
    }
  };

  return (
    <Pressable
      onPress={toggle}
      style={[
        styles.checkMark,
        { backgroundColor: completed === 0 ? "#E9E9EF" : "#0EA5E9" },
      ]}
    ></Pressable>
  );
};

const Task = ({ item, toggleTodo, clearTodo, user_id }) => {
  const { deleteTodo, loading } = useDeleteTodo();

  const bottomSheetModalRef = React.useRef(null);
  const sharedBottomSheetRef = React.useRef(null);
  const snapPoints = ["25%", "48%", "75%"];
  const sharedSnapPoints = ["45%"];

  const handlePresentShared = () => {
    sharedBottomSheetRef.current?.present();
  };

  const handlerPresentModal = () => {
    bottomSheetModalRef.current?.present();
  };

  const [deleteActive, setDeleteActive] = React.useState(false);

  return (
    <TouchableOpacity
      onLongPress={() => setDeleteActive(true)}
      onPress={() => setDeleteActive(false)}
      activeOpacity={0.8}
      style={styles.container}
    >
      <View style={styles.containerTextCheckBox}>
        <CheckMark
          id={item.id}
          completed={item.completed}
          toggleTodo={toggleTodo}
        />
        <Text style={styles.text}>{item.title}</Text>
      </View>
      {item.share_with && (
        <Feather
          onPress={handlePresentShared}
          name="users"
          size={20}
          color="#383839"
          marginHorizontal={15}
        />
      )}
      <Feather
        onPress={handlerPresentModal}
        name="share"
        size={20}
        color="#383839"
      />

      {deleteActive && (
        <Pressable
          onPress={() => {
            deleteTodo(item.id, clearTodo, user_id);
          }}
          style={styles.deleteButton}
        >
          <Text style={{ color: "white" }}>X</Text>
        </Pressable>
      )}

      <BottomSheetModal
        ref={sharedBottomSheetRef}
        snapPoints={sharedSnapPoints}
        backgroundStyle={{ borderRadius: 50, borderwidth: 10 }}
      >
        <ShareUsers
          id={item.id}
          title={item.title}
          completed={item.completed}
        />
      </BottomSheetModal>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        backgroundStyle={{ borderRadius: 50, borderwidth: 10 }}
      >
        <ShareTodo id={item.id} title={item.title} />
      </BottomSheetModal>
    </TouchableOpacity>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
    borderRadius: 21,
    marginBottom: 10,
    //marginRight: 10,
    backgroundColor: "white",
  },
  containerTextCheckBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#383839",
    letterSpacing: -0.011 * 16, // 16 = baseFontSize
    flexShrink: 1,
    marginHorizontal: 8,
  },
  checkMark: {
    width: 20,
    height: 20,
    borderRadius: 7,
  },
  deleteButton: {
    position: "absolute",
    right: 0,
    top: -6,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ef4444",
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  title: {
    fontWeight: "900",
    letterSpacing: 0.5,
    fontSize: 16,
  },
  subtitle: {
    color: "#101318",
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    color: "#56636F",
    fontSize: 13,
    fontWeight: "normal",
    width: "100%",
  },
});
