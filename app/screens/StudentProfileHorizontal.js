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

function StudentProfileHorizontal(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <View style={styles.studentElem}>
          <Image
            style={styles.image}
            source={require("../assets/studentavatar.jpg")}
          />
          <View
            style={{
              // flex: 1,
              flexDirection: "column",
              // justifyContent: "flex-start",
              // flexWrap: "wrap",
            }}
          >
            <Text style={styles.studentName}>Student Name{"\n"}</Text>
            <Text style={styles.numBucks}>Number of Chess Dollars:</Text>
            <Text style={styles.numBucksAmount}>$100</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#60798C",
    color: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
  myStudents: {
    color: "white",
    fontSize: 30,
  },
  studentElem: {
    // width: 100,
    // flex: 1,
    height: 100,
    // margin: 10,
    // alignItems: "flex-start",
    // alignItems: 'stretch'
    // justifyContent: "center",
    //justifyContent: "flex-end",
    backgroundColor: "powderblue",
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    //marginLeft: 10,
  },
  studentName: {
    //flex: 1,
    // flexDirection: "row",
    marginLeft: 10,
    fontSize: 20,
    justifyContent: "center",

    // justifyContent: "flex-start",
  },
  numBucks: {
    marginLeft: 10,
    fontSize: 15,

    //alignItems: "stretch",
  },
  numBucksAmount: {
    marginLeft: 10,
    fontSize: 20,
  },
});

export default StudentProfileHorizontal;
