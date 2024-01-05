import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
} from "react-native";
import EventIcon from "../icons/EventIcon";
import GoalIcon from "../icons/GoalIcon";
import TaskIcon from "../icons/TaskIcon";
import CheckBoxFalse from "../icons/CheckBoxFalse";
import CheckBoxTrue from "../icons/CheckBoxTrue";

import { ToDoItemType } from "../types/ToDoItemType";

interface ToDoItem {
  todo: ToDoItemType;
  inputStyles?: StyleProp<ViewStyle>;
}

const ToDoItem: React.FC<ToDoItem> = ({ todo }) => {
  const [isFinished, setIsFinished] = useState(todo.isFinished || false);

  const { title, category, time } = todo;

  const onPress = () => {
    setIsFinished(!isFinished);
  };

  const renderIcon = (categoryName: string) => {
    if (categoryName === "event" || categoryName === "Event") {
      return <EventIcon />;
    } else if (categoryName === "goal" || categoryName === "Goal") {
      return <GoalIcon />;
    } else if (categoryName === "task" || categoryName === "Task") {
      return <TaskIcon />;
    }
  };

  const renderCheckBox = (check: boolean) => {
    if (check === false) {
      return <CheckBoxFalse style={{ margin: 10 }} />;
    } else {
      return <CheckBoxTrue style={{ margin: 10 }} />;
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View
          style={
            isFinished === false
              ? styles.innerContainer
              : styles.innerContainerFinished
          }
        >
          {renderIcon(category)}
          <View style={{ marginLeft: 10 }}>
            <Text
              style={isFinished === false ? styles.title : styles.titleFinished}
            >
              {title}
            </Text>
            <Text
              style={isFinished === false ? styles.time : styles.timeFinished}
            >
              {time}
            </Text>
          </View>
        </View>
        {renderCheckBox(isFinished)}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
  },
  containerFinished: {
    padding: 16,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
  },
  innerContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  innerContainerFinished: {
    flex: 1,
    padding: 10,
    opacity: 0.5,
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    color: "#1B1B1D",
    fontWeight: "600",
  },
  titleFinished: {
    fontSize: 18,
    marginBottom: 8,
    color: "#1B1B1D",
    fontWeight: "600",
    textDecorationLine: "line-through",
  },
  time: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 8,
    color: "#1B1B1D",
  },
  timeFinished: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 8,
    color: "#1B1B1D",
    textDecorationLine: "line-through",
  },
});

export default ToDoItem;
