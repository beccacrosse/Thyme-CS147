import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Back Button
const BackButtonSmall = (props) => {
  const action = props.buttonAction; // Action that occurs when button is clicked

  return (
    <View>
      <Pressable style={[styles.button, styles.buttonDefault]} onPress={action}>
        <View style={styles.iconStyle}>
          <Ionicons name="arrow-back-sharp" size={20} color="#8D9979" />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#8D9979",
    padding: 5,
    elevation: 2,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    width: 60,
  },
  iconStyle: {
    alignItems: "center",
  },
});

export default BackButtonSmall;
