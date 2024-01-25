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
  const [secureTextEntry, setSecureTextEntry] = useState(false);

  const toggleSecureEntry = () => {
    setSecureTextEntry((prev) => !prev);
  };
  return (
    <View style={[styles.container, inputStyles]}>
      <TextInput
        multiline={multiline}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#999"
      />
      {secured && (
        <TouchableOpacity onPress={toggleSecureEntry} style={styles.toggle}>
          {secureTextEntry === true ? (
            <Text style={styles.btn}>Show</Text>
          ) : (
            <Text style={styles.btn}>Hide</Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  input: {
    paddingHorizontal: 20,
    padding: 10,
    color: "#B8B8B8",
    backgroundColor: "#F3F8FE",
    borderColor: "#dadfe4",
    fontFamily: "Montserrat-Regular",
    borderRadius: 100,
  },
  btn: {
    paddingHorizontal: 16,
    color: "#176FF2",
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
  },
  toggle: {
    position: "absolute",
    alignSelf: "flex-end",
  },
});

export default StyledTextInput;
