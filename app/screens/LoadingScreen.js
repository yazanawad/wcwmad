import LandingPage from "./LandingPage";
import React, { Component } from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import firebase from "@firebase/app";
require("firebase/auth");
import globalVariable from "./globalVariable";
export default class LoadingScreen extends Component {
  goToSchoolSelection = () => {
    this.props.navigation.navigate("SchoolSelection");
  };
  checkIfLoggedIn = () => {
    console.log("From Loading Screen", LandingPage.firebaseSignIn);
    firebase.auth().onAuthStateChanged((user) => {
      console.log("AUTH CHANGED");
      if (user) {
        if (globalVariable.isNewUser) {
          this.props.navigation.navigate("SchoolSelection");
        } else {
          this.props.navigation.navigate("IndividualStudentProfile");
        }
      } else {
        this.props.navigation.navigate("LandingPage");
      }
    });
  };

  componentDidMount() {
    this.checkIfLoggedIn();
    console.log("Loading Ran");
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
