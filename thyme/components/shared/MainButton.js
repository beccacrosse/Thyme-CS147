import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Styles } from "../../assets/themes";

// Main Button
const MainButton = (props) => {
  const title = props.buttonText; // Text on button
  const action = props.buttonAction; // Action that occurs when button is clicked
  const isDefault = props.isDefault != undefined ? props.isDefault : true; // If true or undefined, button will be green, if false, button will only have an outline

  if (isDefault == true) {
    buttonDisplayed = (
      <Pressable style={[styles.button, styles.buttonDefault]} onPress={action}>
        <Text style={styles.textStyle}>{title}</Text>
      </Pressable>
    );
  } else {
    buttonDisplayed = (
      <Pressable style={[styles.button, styles.buttonOther]} onPress={action}>
        <Text style={styles.textStyle}>{title}</Text>
      </Pressable>
    );
  }

  return <View>{buttonDisplayed}</View>;
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    padding: 15,
    elevation: 2,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    width: 100,
  },
  buttonDefault: {
    backgroundColor: Styles.completedColor,
  },
  buttonOther: {
    borderColor: Styles.buttonOutlineColor,
    borderWidth: 1,
  },
  textStyle: {
    color: Styles.buttonOutlineColor,
    textAlign: "center",
  },
});

export default MainButton;
