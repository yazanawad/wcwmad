import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import readSchoolList from "../firebase/readSchoolList";

export default function SchoolSelection() {
  return (
    <View style={styles.container}>
      <Text> School Selection </Text>
      {/* <FlatList></FlatList> */}
      <Button title="Create a School" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
