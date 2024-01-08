import React, { useContext, useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import ToDoItem from "../components/ToDoItem";
import { ToDoItemType } from "../types/ToDoItemType";
import { useDatabase } from "../contexts/DatabaseContext";

const CompletedTasksScreen: React.FC = () => {
  const { tasks } = useDatabase();

  const [completedTasks, setCompletedTasks] = useState<ToDoItemType[]>([]);

  useEffect(() => {
    const completed = tasks.filter((task) => task.isFinished);
    setCompletedTasks(completed);
  }, [tasks]);

  const renderTaskItem = ({ item }: { item: ToDoItemType }) => (
    <ToDoItem value={item}></ToDoItem>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={completedTasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default CompletedTasksScreen;
