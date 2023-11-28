import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";


export default function Connections() {
  return (
    <View style={styles.container}>
    <Text>Welcome to your connections page!</Text>
    <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
