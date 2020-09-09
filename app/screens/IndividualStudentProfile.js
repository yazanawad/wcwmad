import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import StudentProfileVertical from "./StudentProfileVertical";
import firebase from "@firebase/app";

function IndividualStudentProfile(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.myStudents}>
        My Students{"\n"}
        {"\n"}
      </Text>
      <ScrollView style={styles.scrollView}>
        <StudentProfileVertical />
      </ScrollView>
      <Button
        title="Sign Out"
        onPress={() => {
          firebase.auth().signOut();
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#60798C",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  myStudents: {
    color: "white",
    fontSize: 30,
  },
  classElem: {
    width: 300,
    height: 100,
    margin: 10,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "powderblue",
  },
  className: {
    color: "black",
    fontSize: 20,
  },
  scrollView: {
    // backgroundColor: "pink",
    marginHorizontal: 20,

    // borderColor: "black",
    // borderWidth: 5,
  },
});

export default IndividualStudentProfile;
