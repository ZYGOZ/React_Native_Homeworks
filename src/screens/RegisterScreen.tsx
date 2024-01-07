import React, { useState } from "react";
import {
  View,
  Text,
  Image,
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
  const handleLogIn = () => {
    navigation.navigate("Login" as never);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={{ position: "absolute", paddingBottom: 750 }}>
        {/* необращейте внимание я просто не придумал как иначе сделать эти кружки я понимаю что так нельзя */}
        <Image
          style={styles.decor}
          source={require("../images/ellipse1.png")}
        />
        <Image
          style={styles.decor}
          source={require("../images/ellipse2.png")}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome Onboard</Text>
        <Text style={styles.headerLowerText}>
          Let's help you meet up your tasks.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <StyledTextInput
          placeholder="Enter your full name"
          onChangeText={(token) => {
            setToken(token);
          }}
          inputStyles={styles.input}
        />
        <StyledTextInput
          placeholder="Enter your email"
          onChangeText={(token) => {
            setToken(token);
          }}
          inputStyles={styles.input}
        />
        <StyledTextInput
          placeholder="Enter password"
          onChangeText={(token) => {
            setToken(token);
          }}
          secured
          inputStyles={styles.input}
        />
        <StyledTextInput
          placeholder="Enter confirm password"
          onChangeText={(token) => {
            setToken(token);
          }}
          secured
          inputStyles={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          title="Sign Up"
          onPress={handleRegister}
          inputStyles={styles.button}
        />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{}}>Already have an account ? </Text>
          <Text style={{ color: "#0E6565" }} onPress={handleLogIn}>
            Sign in
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#DEEAE8",
    justifyContent: "flex-end",
    width: "100%",
    paddingHorizontal: 16,
  },
  buttonContainer: {
    justifyContent: "center",
    marginBottom: 48,
  },
  button: {
    marginBottom: 16,
  },
  inputContainer: {
    justifyContent: "center",
    marginBottom: 48,
  },
  input: {
    marginBottom: 16,
  },
  text: {
    width: "100%",
    color: "#0E6565",
    fontSize: 14,
    marginBottom: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  headerContainer: {
    justifyContent: "flex-start",
    marginBottom: 48,
  },
  headerText: {
    width: "100%",
    color: "black",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
    padding: 11,
  },
  headerLowerText: {
    width: "100%",
    color: "black",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    padding: 8,
  },
  decor: {
    position: "absolute",
  },
});

export default RegisterScreen;
