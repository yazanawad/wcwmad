import React, { Component, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Keyboard,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { addSchoolToFirebase } from "../firebase/addSchoolToFirebase";

export default function CreateASchool() {
  //   addSchoolToFirebase();
  //   const [schoolData, setschoolData] = useState({
  //     Name: null,
  //     State: null,
  //     City: null,
  //     Password: null,
  //   });
  const [schoolName, setSchoolName] = useState();
  const [schoolState, setSchoolState] = useState();
  const [schoolCity, setSchoolCity] = useState();
  const [schoolPassword, setSchoolPassword] = useState();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text>School Name:</Text>
        <TextInput
          onChangeText={(text) => {
            setSchoolName(text);
          }}
          style={styles.tInput}
        />
        <Text>City:</Text>
        <TextInput
          onChangeText={(text) => setSchoolCity(text)}
          style={styles.tInput}
        />
        <Text>State:</Text>
        <TextInput
          onChangeText={(text) => setSchoolState(text)}
          style={styles.tInput}
        />
        <Text>Teacher Passcode</Text>
        <TextInput
          onChangeText={(text) => setSchoolPassword(text)}
          style={styles.tInput}
        />
        <Button
          title="Submit"
          onPress={() => {
            addSchoolToFirebase(
              schoolName,
              schoolState,
              schoolCity,
              schoolPassword
            );
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tInput: {
    backgroundColor: "#66ffff",
    width: 200,
  },
});
