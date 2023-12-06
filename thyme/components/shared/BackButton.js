import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {Button} from "react-native-paper";

// Back Button
const BackButton = (props) => {
  const action = props.buttonAction; // Action that occurs when button is clicked

  return (
    <View>
      <Button mode= "default" onPress={action} width = {100}>
        <View style={{display: "flex", displayDirection: "row"}} >
          <Ionicons name="arrow-back-sharp" size={60} color="#8D9979" />
          {/* <Text>Connections</Text> */}
        </View>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#8D9979",
    padding: 10,
    elevation: 2,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    width: 80,
  },
  iconStyle: {
    alignItems: "center",
  },
});

export default BackButton;
