import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from "react-native";

interface StyledButton {
  onPress: () => void;
  title: string;
}

const StyledButton: React.FC<StyledButton> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#4A3780",
    borderRadius: 100,
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
  title: {
    color: "#DEEAE8",
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
});

export default StyledButton;
