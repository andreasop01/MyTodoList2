CREATE DATABASE todo_list;

USE todo_list;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT false,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE 
);


CREATE TABLE compartir_todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  todo_id INT NOT NULL,
  share_with INT ,
  FOREIGN KEY (user_id) REFERENCES users(id) ,
  FOREIGN KEY (todo_id) REFERENCES todos(id),
  FOREIGN KEY (share_with) REFERENCES users(id) ON DELETE CASCADE
);

--inserto urusarios en users 

INSERT INTO users (username, email, password) VALUES ('admin', 'andrea.llovera@hotmail.com','admin');
INSERT INTO users (username, email, password) VALUES ('admin2', 'andrea.llovera2@hotmail.com','admin2');

-- inserto tareas en todos
INSERT INTO todos (title, user_id) VALUES ('👨🏻‍💻 programar ', 1);
INSERT INTO todos (title, user_id) VALUES ('📚 estudiar', 1);
INSERT INTO todos (title, user_id) VALUES ('🏋🏻‍♂️ hacer ejercicio', 3);
INSERT INTO todos (title, user_id) VALUES ('🍎 comprar frutas', 3);

-- inserto tareas compartidas
INSERT INTO compartir_todos (user_id, todo_id, share_with) VALUES (1, 3, 3);

-- coger los todos que estan relacionados con el share_with
SELECT todos.* ,compartir_todos.share_with FROM todos LEFT JOIN compartir_todos ON todos.id = compartir_todos.todo_id WHERE todos.user_id = [user_id] OR compartir_todos.share_with =  [user_id];
