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
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
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
      <StyledButton
        title="Sign Up"
        onPress={handleRegister}
        inputStyles={styles.button}
      />
      <Text style={styles.text}>Forgot your password?</Text>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  text: {
    color: "#5DB075",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 16,
  },
});

export default RegisterScreen;
