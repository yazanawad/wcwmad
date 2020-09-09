import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import LoadingScreen from "./LoadingScreen";
export default function RoleSelection() {
  return (
    <View style={styles.container}>
      <Button title="Teacher" onPress={() => {}} />
      <Button title="Student" />
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
