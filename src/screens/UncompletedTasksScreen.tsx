// UncompletedTasksScreen.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

interface Task {
  id: string;
  name: string;
  description: string;
  date: Date;
  completed: boolean;
  category: 'event' | 'task' | 'goal';
}

const tasksData: Task[] = [
  // Здесь можно добавить начальные задачи
];

const UncompletedTasksScreen: React.FC = () => {
  const renderTaskItem = ({ item }: { item: Task }) => (
    <TouchableOpacity>
      <View>
        <Text>{item.name}</Text>
        <Text>{item.date.toLocaleString()}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={tasksData.filter(task => !task.completed)}
        renderItem={renderTaskItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default UncompletedTasksScreen;
