import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { useAuth } from "../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";
import StyledTextInput from "../components/StyledTextInput";
import StyledButton from "../components/StyledButton";

const RegisterScreen: React.FC = () => {
  const { signUp } = useAuth();
  const [token, setToken] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
    signUp(token);
    navigation.navigate("Login" as never);
  };

  return (
    <KeyboardAvoidingView className="flex-1 bg-white p-4">
      <View className="flex-1 justify-center">
        <StyledTextInput
          placeholder="Name"
          onChangeText={(token) => {
            setToken(token);
          }}
          inputStyles={styles.input}
        />
        <StyledTextInput
          placeholder="Email"
          onChangeText={(token) => {
            setToken(token);
          }}
          inputStyles={styles.input}
        />
        <StyledTextInput
          placeholder="Password"
          onChangeText={(token) => {
            setToken(token);
          }}
          secured
          inputStyles={styles.input}
        />
      </View>

      <View className="justify-end mb-[16]">
        <StyledButton
          title="Sign Up"
          onPress={handleRegister}
          inputStyles={styles.button}
        />
        <Text className="text-green-600 text-[16px] font-semibold text-center">
          Forgot your password?
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  button: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
    borderColor: "#E0E0E0",
  },
});

export default RegisterScreen;
