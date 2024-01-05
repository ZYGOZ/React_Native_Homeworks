// CompletedTasksScreen.tsx
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import ToDoItem from "../components/ToDoItem";
import { ToDoItemType } from "../types/ToDoItemType";

interface Task {
  id: string;
  name: string;
  description: string;
  date: Date;
  completed: boolean;
  category: "event" | "task" | "goal";
}

const tasksData: Task[] = [
  // Здесь можно добавить начальные задачи
];
const todoList: ToDoItemType = {
  title: "Заголовок 1",
  category: "Event",
  time: "12:00",
  isFinished: false,
};
const CompletedTasksScreen: React.FC = () => {
  const renderTaskItem = ({ item }: { item: Task }) => (
    <TouchableOpacity>
      <View>
        <Text>{item.name}</Text>
        <Text>{item.date.toLocaleString()}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <ToDoItem todo={todoList} />

     
    </View>
  );
};

export default CompletedTasksScreen;
