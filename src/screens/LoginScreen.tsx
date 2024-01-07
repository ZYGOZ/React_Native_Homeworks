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

const LoginScreen: React.FC = () => {
  const { signIn } = useAuth();
  const navigation = useNavigation();
  const [token, setToken] = useState("");

  const handleLogin = async () => {
    const isSignedIn = await signIn(token);
    if (isSignedIn) {
      navigation.navigate("Home" as never);
    }
  };

  const handleSignUp = () => {
    navigation.navigate("Register" as never);
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
        <Text style={styles.headerText}>Welcome Back!</Text>
        <Image
          style={styles.headerImg}
          source={require("../images/login.png")}
        ></Image>
      </View>
      <View style={styles.inputContainer}>
        <StyledTextInput
          placeholder="Enter your email"
          onChangeText={(token) => {
            setToken(token);
          }}
          inputStyles={styles.input}
        />
        <StyledTextInput
          placeholder="Enter your password"
          onChangeText={(token) => {
            setToken(token);
          }}
          secured
          inputStyles={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Forgot your password?</Text>
        <StyledButton
          title="Log In"
          onPress={handleLogin}
          inputStyles={styles.button}
        />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{}}>Don't have an account ? </Text>
          <Text style={{ color: "#0E6565" }} onPress={handleSignUp}>
            Sign up
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
    marginBottom: 32,
  },
  input: {
    marginBottom: 16,
  },
  text: {
    width: "100%",
    color: "#0E6565",
    fontSize: 14,
    marginBottom: 16,
    fontFamily: "Poppins",
    fontWeight: "400",
    textAlign: "center",
  },
  headerContainer: {
    justifyContent: "flex-start",
  },
  headerText: {
    width: "100%",
    color: "black",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  headerImg: {
    alignSelf: "center",
    marginTop: 16,
    width: 321,
    height: 315,
  },
  decor: {
    position: "absolute",
  },
});

export default LoginScreen;
