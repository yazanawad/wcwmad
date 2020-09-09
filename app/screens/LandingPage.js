import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import ClassSelectionPage from "./ClassSelectionPage";
import googleSignIn from "../firebase/googleSignIn";
require("firebase/auth");
require("firebase/database");

function LandingPage(props) {
  firebaseSignIn = new googleSignIn();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.wcwmad}>Why Can't We Make a Difference</Text>
      <Image style={styles.image} source={require("../assets/mybill.png")} />
      <StatusBar style="auto" />
      <TouchableOpacity>
        <View style={styles.goToProfile}>
          <Text
            style={styles.goToFileText}
            onPress={() => {
              this.firebaseSignIn.signInWithGoogleAsync();
            }}
          >
            Google Login Here
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    backgroundColor: "#60798C",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  goToProfile: {},
  goToFileText: {
    color: "red",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 200,
    fontSize: 20,
  },
  wcwmad: {
    color: "white",
    fontSize: 20,
  },
});

export default LandingPage;
