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
import StudentProfileHorizontal from "./StudentProfileHorizontal";

function ClassRoster(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.myStudents}>My Students</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <ScrollView style={styles.scrollView}>
          <View style={styles.classElem}>
            <StudentProfileHorizontal />
          </View>
          <View style={styles.classElem}>
            <StudentProfileHorizontal />
          </View>
          <View style={styles.classElem}>
            <StudentProfileHorizontal />
          </View>
          <View style={styles.classElem}>
            <StudentProfileHorizontal />
          </View>
          <View style={styles.classElem}>
            <StudentProfileHorizontal />
          </View>
          <View style={styles.classElem}>
            <StudentProfileHorizontal />
          </View>
          <View style={styles.classElem}>
            <StudentProfileHorizontal />
          </View>
          <View style={styles.classElem}>
            <StudentProfileHorizontal />
          </View>
          <View style={styles.classElem}>
            <StudentProfileHorizontal />
          </View>
        </ScrollView>
      </View>
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

export default ClassRoster;
