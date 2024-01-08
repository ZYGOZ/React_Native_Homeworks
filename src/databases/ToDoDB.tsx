import * as SQLite from "expo-sqlite";
import { ToDoItemType } from "../types/ToDoItemType";

const db = SQLite.openDatabase("tasks.db");

export const initDatabase = () => {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, category TEXT, time TEXT, isFinished INTEGER)",
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

export const addTask = (task: ToDoItemType) => {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO tasks (title, category, time, isFinished) VALUES (?, ?, ?, ?)",
        [task.title, task.category, task.time, task.isFinished ? 1 : 0],
        (_, result) => {
          resolve();
        },
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

export const getTasks = (): Promise<ToDoItemType[]> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM tasks",
        [],
        (_, result) => {
          const tasks: ToDoItemType[] = [];
          for (let i = 0; i < result.rows.length; i++) {
            const row = result.rows.item(i);
            const task: ToDoItemType = {
              title: row.title,
              category: row.category,
              time: row.time,
              isFinished: row.isFinished === 1 ? true : false,
            };
            tasks.push(task);
          }
          resolve(tasks);
        },
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

export const clearTasks = () => {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM tasks",
        [],
        (_, result) => {
          resolve();
        },
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};
