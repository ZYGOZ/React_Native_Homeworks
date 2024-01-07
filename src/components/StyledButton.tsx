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
  inputStyles?: StyleProp<ViewStyle>;
}

const StyledButton: React.FC<StyledButton> = ({
  title,
  onPress,
  inputStyles,
}) => {
  return (
    <TouchableOpacity style={[inputStyles, styles.container]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#5DB075",
    borderRadius: 100,
  },
  title: {
    color: "#DEEAE8",
    textAlign: "center",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "600",
  },
});

export default StyledButton;
