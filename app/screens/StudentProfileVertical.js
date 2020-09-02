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

function StudentProfileVertical(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "powderblue",
          alignItems: "stretch",
        }}
      >
        <Image
          style={styles.image}
          source={require("../assets/studentavatar.jpg")}
        />
        <Text style={styles.studentName}>Student Name{"\n"}</Text>
        <Text style={styles.numBucks}>Number of Chess Dollars:</Text>
        <Text style={styles.numBucksAmount}>$100</Text>
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
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    // alignItems: "center",
    // justifyContent: "center",
  },
  studentName: {
    marginLeft: 10,
    fontSize: 20,
    textAlign: "center",
    // alignItems: "center",
    // justifyContent: "center",
  },
  numBucks: {
    marginLeft: 10,
    fontSize: 20,
    textAlign: "center",
  },
  numBucksAmount: {
    marginLeft: 10,
    fontSize: 20,
    textAlign: "center",
  },
});

export default StudentProfileVertical;
