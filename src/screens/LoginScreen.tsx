import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
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
    console.log(isSignedIn);
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
          title="Log In"
          onPress={handleLogin}
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
  },
});

export default LoginScreen;
