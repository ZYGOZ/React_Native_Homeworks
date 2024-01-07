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
const HomeScreen: React.FC = () => {
  const { signIn } = useAuth();
  const navigation = useNavigation();
  const [token, setToken] = useState("");

  const handleGetStarted = () => {
    navigation.navigate("Login" as never);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={{ position: "absolute", paddingBottom: 750 }}>
        {/* необращейте внимание я просто не придумал как иначе сделать эти кружки я понимаю что так нельзя */}

        <Image
          style={{ position: "absolute" }}
          source={require("../images/ellipse1.png")}
        />
        <Image
          style={{ position: "absolute" }}
          source={require("../images/ellipse2.png")}
        />
      </View>
      <View style={styles.headerContainer}>
        <Image
          style={styles.headerImg}
          source={require("../images/welcome.png")}
        />
        <Text style={styles.headerText}>Welcome Onboard</Text>
        <Text style={styles.headerLowerText}>
          Lorem ipsum dolor sit amet consectetur. Enim.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          title="Get Started"
          onPress={handleGetStarted}
          inputStyles={styles.button}
        />
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
    flex: 1,
    justifyContent: "center",
    marginBottom: 48,
  },
  headerText: {
    width: "100%",
    color: "black",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 58,
  },
  headerLowerText: {
    width: "100%",
    color: "black",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  headerImg: {
    alignSelf: "flex-end",
    marginTop: 16,
    marginBottom: 70,
    width: 322,
    height: 239,
  },
});

export default HomeScreen;
