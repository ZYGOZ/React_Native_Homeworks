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
import { Ionicons } from "@expo/vector-icons";

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
    <View style={[inputStyles, styles.container]}>
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
    width: "100%",
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    color: "#F6F6F6",
  },
  input: {
    padding: 10,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 6,
  },
  btn: {
    paddingHorizontal: 16,
    color: "#5DB075",
    fontSize: 16,
    fontWeight: "500",
  },
  toggle: {
    position: "absolute",
    alignSelf: "flex-end",
  },
});

export default StyledTextInput;
