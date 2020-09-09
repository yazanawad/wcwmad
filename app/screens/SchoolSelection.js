import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function SchoolSelection() {
  return (
    <View style={styles.container}>
      <Text> School Selection </Text>
      <Button>Create A School</Button>
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
