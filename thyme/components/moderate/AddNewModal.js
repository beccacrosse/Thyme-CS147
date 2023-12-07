import { Text, View, SafeAreaView, TextInput, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import React, { Component } from "react";
import { Overlay } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-paper";

const AddNewModal = (props) => {
  const [nameText, onNameChangeText] = React.useState("");
  const [relationText, onRelationChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  return (
    <SafeAreaView>
      <View>
        <Overlay isVisible={false}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#263E20", paddingBottom: 20, fontSize: 26}}> Adding a New Connection </Text>
            <IconButton
              icon="camera"
              mode="outlined"
              size={80}
              
              onPress={() => console.log("Pressed")}
            />
            {/* <Ionicons name="camera-outline" size={24} color="black" /> */}
            <View
              style={{
                paddingTop: 10,
                display: "flex",
                alignContent: "flex-start",
              }}
            >
              <Text style={{ paddingLeft: 10, color: "#263E20" }}>Name</Text>
              <TextInput
                style={{ ...styles.input,borderColor: "#263E20" }}
                onChangeText={onNameChangeText}
                value={nameText}
              />
              <Text style={{ paddingLeft: 10,  color: "#263E20"  }}>Relation</Text>
              <TextInput
                style={{...styles.input, borderColor: "#263E20"}}
                onChangeText={onRelationChangeText}
                value={relationText}
                placeholder=""
              />
              <View style = {{width : "full", padding : 10}}>
              <Button
                theme={{colors: {primary: "#263E20" }}}
                mode="outlined"
                size={38}
              >
                Add new Connection
              </Button>
              </View>
            </View>
          </View>
        </Overlay>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  welcomeMessage: {
    fontFamily: "Alegreya Sans",
    fontSize: 80,
    color: "#263E20",
    marginBottom: 90,
    fontWeight: "bold",
  },
  bodyText: {
    fontFamily: "Alegreya Sans",
    color: "#263E20",
  },

});
export default AddNewModal;
