import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from "react-native";

interface StyledTextInput {
  placeholder: string;
  multiline?: boolean;
  secured?: boolean;
  value?: string;
  onChangeText: (value: string) => void;
  inputStyles?: StyleProp<ViewStyle>;
}

const StyledTextInput: React.FC<StyledTextInput> = ({
  placeholder,
  value,
  multiline = false,
  secured = false,
  onChangeText,
  inputStyles,
}) => {
  return (
    <View style={[inputStyles, styles.container]}>
      <TextInput
        multiline={multiline}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secured}
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
    borderColor: "#FFFFFF",
    borderRadius: 100,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  input: {
    fontSize: 13,
    fontWeight: "900",
    marginHorizontal: 11,
    color: "#000000",
    fontFamily: "Poppins",
    backgroundColor: "#FFFFFF",
  },
});

export default StyledTextInput;
