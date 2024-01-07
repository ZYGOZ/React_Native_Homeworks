import React, { useState, useEffect } from "react";
import { Text, StyleSheet, KeyboardAvoidingView, View } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";
import StyledTextInput from "../components/StyledTextInput";
import StyledButton from "../components/StyledButton";

const LoginScreen: React.FC = () => {
  const { signIn } = useAuth();
  const navigation = useNavigation();
  const [token, setToken] = useState("");

  const handleLogin = async () => {
    const isSignedIn = await signIn(token as string);
    if (isSignedIn) {
      navigation.navigate("Home" as never);
    }
  };

  useEffect(() => {
    if (token) {
      navigation.navigate("Home" as never);
    }
  }, []);

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
          placeholder="Password"
          onChangeText={(token) => {
            setToken(token);
          }}
          secured
          inputStyles={styles.input}
        />
      </View>
      <StyledButton
        title="Log In"
        onPress={handleLogin}
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
    width: "100%",
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
    width: "100%",
    color: "#5DB075",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 16,
  },
});

export default LoginScreen;
