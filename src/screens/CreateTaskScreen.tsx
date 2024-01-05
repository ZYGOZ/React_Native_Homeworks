// CreateTaskScreen.tsx
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import StyledTextInput from "../components/StyledTextInput";
import StyledButton from "../components/StyledButton";

const CreateTaskScreen: React.FC = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  // Function to handle task creation
  const createTask = () => {
    // Implement task creation logic here
    console.log("Task created:", {
      taskName,
      taskDescription,
    });
    // Reset state or navigate back
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
        <View style={{ flexDirection: "row" }}>
          <StyledTextInput
            title="Date"
            isDatePicker
            placeholder="Date"
            value={taskDescription}
            onChangeText={setTaskDescription}
          />
          <StyledTextInput
            style={{ marginLeft: 8 }}
            title="Time"
            isTimePicker
            placeholder="Time"
            value={taskDescription}
            onChangeText={setTaskDescription}
          />
        </View>
        <StyledTextInput
          title="Notes"
          placeholder="Notes"
          multiline
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
  title: {
    fontSize: 14,
    color: "#1B1B1D",
    marginBottom: 8,
  },
  input: {
    padding: 10,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "white",
  },
});
export default CreateTaskScreen;
