import React, { useContext, useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import ToDoItem from "../components/ToDoItem";
import { ToDoItemType } from "../types/ToDoItemType";
import { useDatabase } from "../contexts/DatabaseContext";

const UncompletedTasksScreen: React.FC = () => {
  const { tasks } = useDatabase();
  const [uncompletedTasks, setUncompletedTasks] = useState<ToDoItemType[]>([]);

  useEffect(() => {
    const uncompleted = tasks.filter((task) => !task.isFinished);
    setUncompletedTasks(uncompleted);
  }, [tasks]);

  const renderTaskItem = ({ item }: { item: ToDoItemType }) => (
    <ToDoItem value={item}></ToDoItem>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={uncompletedTasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default UncompletedTasksScreen;
