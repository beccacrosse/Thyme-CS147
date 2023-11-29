import React, { useState, useEffect } from "react";
import { Modal, StyleSheet, Pressable, Text, View } from "react-native";
import MainButton from "./MainButton";

// A modal that displays a customizable popup with a title, message, and optional buttons.
const PopUp = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  // Obtain title, message, and button text from props
  const title = props.title; // Title of PopUp
  const message = props.message; // Body text of PopUp
  const primaryButtonText = props.primaryButtonText; // Text on Primary Button
  const secondaryButtonText = props.secondaryButtonText; // Text on Secondary Button
  const visibility = props.isVisibile; // Whether or not the PopUp is visible

  // Set the visibility of PopUp based on props' visibility value
  useEffect(() => {
    if (visibility != null) {
      setModalVisible(visibility);
    }
  }, [visibility]);

  // Determine how many buttons to render
  if (secondaryButtonText) {
    // If secondaryButtonText is specified, include 2 buttons
    buttonDisplayed = (
      <View style={styles.buttonContainer}>
        <MainButton
          buttonText={secondaryButtonText}
          buttonAction={() => setModalVisible(!modalVisible)}
          isDefault={false}
        />
        <MainButton
          buttonText={primaryButtonText}
          buttonAction={() => setModalVisible(!modalVisible)}
          isDefault={true}
        />
      </View>
    );
  } else if (primaryButtonText) {
    // If only primaryButtonText is specified, include 1 button
    buttonDisplayed = (
      <View style={styles.buttonContainer}>
        <MainButton
          buttonText={primaryButtonText}
          buttonAction={() => setModalVisible(!modalVisible)}
        />
      </View>
    );
  } else {
    // If neither primaryButtonText nor secondaryButtonText is specified, include no buttons
    buttonDisplayed = <View></View>;
  }

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitleText}>{title}</Text>
            <Text style={styles.modalBodyText}>{message}</Text>
            {buttonDisplayed}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#E5ECDA",
    borderColor: "#898686",
    //borderWidth: 1,
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 40,
    //borderColor: "#898686",
    //borderWidth: 1,
    padding: 20,
    elevation: 2,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    width: 100,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  buttonOpen: {
    backgroundColor: "#8FD48D",
  },
  buttonClose: {
    backgroundColor: "#8FD48D",
  },
  textStyle: {
    color: "black",
    textAlign: "center",
  },
  modalTitleText: {
    fontSize: 22, // Size of Title Font
    fontWeight: "bold",
    margin: 5,
    textAlign: "center",
  },
  modalBodyText: {
    fontSize: 15,
    margin: 10,
  },
});

export default PopUp;
