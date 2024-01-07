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
    width: "100%",
    paddingVertical: 16,
    backgroundColor: "#30A6AE",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
  title: {
    color: "#DEEAE8",
    textAlign: "center",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "600",
    fontFamily: "Poppins",
  },
});

export default StyledButton;
