import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

// Main Button 
const MainButton = (props) => {
  const title = props.buttonText; // Text on button
  const action = props.buttonAction; // Action that occurs when button is clicked

  return (
    <View>
      <Pressable style={[styles.button, styles.buttonDefault]} onPress={action}>
        <Text style={styles.textStyle}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    //borderWidth: 1,
    padding: 15,
    elevation: 2,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    width: 100,
  },
  buttonDefault: {
    backgroundColor: "#8FD48D",
  },
  textStyle: {
    color: "black",
    textAlign: "center",
  },
});

export default MainButton;
