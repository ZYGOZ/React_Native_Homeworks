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
    <View style={[inputStyles, { width: "100%", justifyContent: "center" }]}>
      <TextInput
        multiline={multiline}
        value={value}
        onChangeText={onChangeText}
        className="p-3 text-neutral-400 bg-neutral-100 text-sm border-2 border-gray-300 rounded-md"
        placeholder={placeholder}
        placeholderTextColor="#999"
        secureTextEntry={secured && secureTextEntry}
      />
      {secured && (
        <TouchableOpacity
          onPress={toggleSecureEntry}
          className="absolute self-end p-3"
        >
          <Text className="text-green-600  text-center text-base font-semibold ">
            {secureTextEntry ? "Show" : "Hide"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default StyledTextInput;
