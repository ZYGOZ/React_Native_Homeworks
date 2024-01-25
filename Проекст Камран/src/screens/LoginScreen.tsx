import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
} from "react-native";
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
      <View style={styles.innerContainer}>
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
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.text}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Register" as never);
        }}
      >
        <Text style={styles.text}>Sign Up?</Text>
      </TouchableOpacity>
      <StyledButton
        title="Log In"
        onPress={handleLogin}
        inputStyles={styles.button}
      />
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
  innerContainer: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  text: {
    color: "#176FF2",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    textAlign: "center",
    marginBottom: 16,
  },
});

export default LoginScreen;
