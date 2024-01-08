import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import StyledTextInput from "../components/StyledTextInput";
import StyledButton from "../components/StyledButton";
import { ToDoItemType } from "../types/ToDoItemType";
import { useDatabase } from "../contexts/DatabaseContext";
import { clearTasks } from "../databases/ToDoDB";
import EventIcon from "../icons/EventIcon";
import GoalIcon from "../icons/GoalIcon";
import TaskIcon from "../icons/TaskIcon";

const CreateTaskScreen: React.FC = () => {
  const { addTask } = useDatabase();

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  const createTask = () => {
    const task: ToDoItemType = {
      title: taskName,
      category: taskCategory,
      time: `${taskDate} ${taskTime}`,
      isFinished: false,
    };
    addTask(task);
    //clearTasks();
  };

  const handleIconPress = (category: string) => {
    setTaskCategory(category);
  };
  return (
    <KeyboardAvoidingView style={{ padding: 16, flex: 1 }}>
      <View style={styles.container}>
        <StyledTextInput
          title="Task Title"
          placeholder="Task Title"
          value={taskName}
          onChangeText={setTaskName}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 24,
          }}
        >
          <Text style={styles.text}>Category</Text>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => handleIconPress("task")}
          >
            <TaskIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => handleIconPress("event")}
          >
            <EventIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => handleIconPress("goal")}
          >
            <GoalIcon />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 24 }}>
          <StyledTextInput
            title="Date"
            isDatePicker
            placeholder="Date"
            value={taskDate}
            onChangeText={setTaskDate}
          />
          <StyledTextInput
            style={{ marginLeft: 8 }}
            title="Time"
            isTimePicker
            placeholder="Time"
            value={taskTime}
            onChangeText={setTaskTime}
          />
        </View>
        <StyledTextInput
          title="Notes"
          placeholder="Notes"
          value={taskDescription}
          onChangeText={setTaskDescription}
        />

        <StyledButton title="Create Task" onPress={createTask} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    fontSize: 14,
    color: "#1B1B1D",
    marginBottom: 8,
    fontWeight: "600",
  },
  icon: { borderWidth: 2, borderColor: "#FFFFFF", borderRadius: 9999 },
});
export default CreateTaskScreen;
