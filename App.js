import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import LandingPage from "./app/screens/LandingPage";
import ClassSelectionPage from "./app/screens/ClassSelectionPage";
import ClassRoster from "./app/screens/ClassRoster";
import IndividualStudentProfile from "./app/screens/IndividualStudentProfile";
import LoadingScreen from "./app/screens/LoadingScreen";
import SchoolSelection from "./app/screens/SchoolSelection";
import RoleSelection from "./app/screens/RoleSelection";
import CreateASchool from "./app/screens/CreateASchool";

import firebase from "@firebase/app";
firebase.initializeApp(firebaseConfig);
import { firebaseConfig } from "./app/firebase/config";
require("firebase/auth");
import { createAppContainer, createSwitchNavigator } from "react-navigation";

export default function App() {
  return <CreateASchool />;
}

function Router() {
  return (
    <>
      <Stack.Screen name="Home" component={HomeScreen} />
    </>
  );
}
const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LandingPage: LandingPage,
  IndividualStudentProfile: IndividualStudentProfile,
  SchoolSelection: SchoolSelection,
  RoleSelection: RoleSelection,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);
