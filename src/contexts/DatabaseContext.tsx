import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { initDatabase, addTask, getTasks } from "../databases/ToDoDB";
import { ToDoItemType } from "../types/ToDoItemType";

interface DatabaseContextType {
  tasks: ToDoItemType[];
  addTask: (task: ToDoItemType) => void;
}

const DatabaseContext = createContext<DatabaseContextType | undefined>(
  undefined
);
interface DatabaseProviderProps {
  children: ReactNode;
}

export const useDatabase = (): DatabaseContextType => {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error("useDatabase must be used within a DatabaseProvider");
  }
  return context;
};

export const DatabaseProvider: React.FC<DatabaseProviderProps> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<ToDoItemType[]>([]);

  useEffect(() => {
    initDatabase()
      .then(() => {
        fetchTasks();
      })
      .catch((error) => {
        console.error("Error initializing database:", error);
      });
  }, []);

  const fetchTasks = () => {
    getTasks()
      .then((tasksFromDB) => {
        setTasks(tasksFromDB);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  };

  const addTaskToDB = (newTask: ToDoItemType) => {
    addTask(newTask)
      .then(() => {
        fetchTasks();
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  };

  const contextValue: DatabaseContextType = {
    tasks,
    addTask: addTaskToDB,
  };

  return (
    <DatabaseContext.Provider value={contextValue}>
      {children}
    </DatabaseContext.Provider>
  );
};
