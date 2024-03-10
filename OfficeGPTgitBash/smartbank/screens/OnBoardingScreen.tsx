import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { LoginNavigationProps } from "../navigation/LoginStack";
import { trackEvent } from "../eventTracking/EventTracking";
import { useEvent } from "../EventContext";

const OnBoardingScreen = () => {
  const navigation = useNavigation<LoginNavigationProps>();
  const { setEventData } = useEvent();

  const handleSignUpPress = async () => {
    const eventData = {
      event: "button pressed",
      eventName: "signup",
      timestamp: Date.now(),
    };
    trackEvent(eventData).then((data) => {
      setEventData(data);
    });
    navigation.navigate("SignUp");
  };

  const handleLoginPress = () => {
    const eventData = {
      event: "button pressed",
      eventName: "login",
      timestamp: Date.now(),
    };
    trackEvent(eventData).then((data) => {
      setEventData(data);
    });
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>OFFICE GPT</Text>
        <Text style={styles.subtitle}>
          The best choice for your Office Management
        </Text>
        <Image
          source={require("../assets/off.jpg")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={handleSignUpPress}>
          <Text style={styles.buttonText}>Sign up</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.secondaryButton]} onPress={handleLoginPress}>
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>Log in</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#420D09",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  buttons: {
    marginTop: 20,
  },
  button: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FF5A5F",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "#FFB3B8",
  },
  secondaryButtonText: {
    color: "#333",
  },
});

export default OnBoardingScreen;
