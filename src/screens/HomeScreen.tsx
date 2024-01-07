import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";
import StyledButton from "../components/StyledButton";

const HomeScreen: React.FC = () => {
  const { signOut } = useAuth();
  const navigation = useNavigation();
  const [token, setToken] = useState("");

  const handleSignout = () => {
    signOut();
    navigation.navigate("Login" as never);
  };
  return (
    <KeyboardAvoidingView className="flex-1 bg-white p-4">
      <View className="flex-1 flex-end">
        <Text className="flex-1 ">WELCOME</Text>
        <View className="flex-end mb-[16]">
          <StyledButton
            title="Sign Out"
            onPress={handleSignout}
            inputStyles={styles.button}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 16,
  },
});

export default HomeScreen;
