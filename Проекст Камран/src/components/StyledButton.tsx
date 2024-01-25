import React, { useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from "react-native";
import { useFonts } from "expo-font";

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
    <TouchableOpacity style={[styles.container, inputStyles]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#176FF2",
    borderRadius: 16,
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Montserrat-Bold",
    fontStyle: "normal",
  },
});

export default StyledButton;
