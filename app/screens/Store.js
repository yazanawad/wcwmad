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

function Store(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.myStudents}>My Students</Text>
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
        <View style={styles.classElem}>
          <StudentProfile />
        </View>
        <View style={styles.classElem}>
          <Text style={styles.className}>Math 10:00-11:00</Text>
        </View>
        <View style={styles.classElem}>
          <Text style={styles.className}>History 11:00-12:00</Text>
        </View>
        <View style={styles.classElem}>
          <Text style={styles.className}>Art 1:00-2:00</Text>
        </View>
        <View style={styles.classElem}>
          <Text style={styles.className}>Chemistry 2:00-3:00</Text>
        </View>
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
    width: 100,
    height: 100,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "powderblue",
  },
  className: {
    color: "black",
    fontSize: 20,
  },
});

export default Store;
