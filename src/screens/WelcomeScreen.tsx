import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import StyledButton from "../components/StyledButton";

const image = {
  uri: "https://s3-alpha-sig.figma.com/img/df58/ed37/f41dc416f233292567f9eab10151f0e7?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WDF0Bhe9My49y95NqZTedUCJq8HB8hp8PuLjY--OiKKH55d4E1tdhwVBTr~MoOGBemsBorYkJWpQj3ACpQSy-yNGMPFbB6KXl596HGCkn6IlNl-lC1ln1Wv~qR8We042iTYDwU8RcYWiMQmTNYMh-PRrXhDkWBzqRe--52LDHTLq-NSawraJBudS3uJkxkUTvZ6nKaiXPACkF3-35E6qQ3X33ZFF-CggPeoivhW1ZuPfX6Nfx2jt4aOkySYhhbUfCrh1Lx6Oe3Wl8cn2ekL5~JecnWZIsY3RqFLGktV00YVAfad4w5SrjZ20fs~PJWiFotiPGHh-WT3qk7N7FhENuw__",
};

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [token, setToken] = useState("");

  useEffect(() => {
    if (token) {
      navigation.navigate("Home" as never);
    }
  }, []);

  return (
    <ImageBackground source={image} style={styles.image}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Aspen</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Plan your</Text>
          <Text style={styles.text2}>Luxurious Vacation</Text>
        </View>
        <StyledButton
          title="Explore"
          onPress={() => {
            navigation.navigate("Login" as never);
          }}
          inputStyles={styles.button}
        />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 24,
  },
  header: {
    color: "white",
    fontSize: 116,
    fontFamily: "Hiatus",
    textAlign: "center",
  },
  headerContainer: { flex: 1, justifyContent: "center", marginBottom: 24 },
  text1: {
    color: "white",
    fontSize: 24,
    fontFamily: "Montserrat-Regular",
  },
  text2: {
    color: "white",
    fontSize: 40,
    fontFamily: "Montserrat-SemiBold",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  button: {
    marginBottom: 48,
  },
});

export default WelcomeScreen;
