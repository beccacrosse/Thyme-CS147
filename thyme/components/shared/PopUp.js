import React, { useState, useEffect } from "react";
import { Modal, StyleSheet, Pressable, Text, View } from "react-native";

export const PopUp = (props) => {
  const [modalVisible, setModalVisible] = useState(true);

  // Obtain title, message, and button text from props
  const title = props.title;
  const message = props.message;
  const primaryButtonText = props.primaryButtonText;
  const secondaryButtonText = props.secondaryButtonText;
  const visibility = props.visibility;

  // TO DO: Fix the Visibility
  useEffect(() => {
    if (visibility) {
      setModalVisible(visibility);
    }
  }, [visibility]);

  // Determine how many buttons to render
  if (secondaryButtonText) {
    // If secondaryButtonText is specified, include 2 buttons
    buttonDisplayed = (
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>{secondaryButtonText}</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>{primaryButtonText}</Text>
        </Pressable>
      </View>
    );
  } else if (primaryButtonText) {
    // If only primaryButtonText is specified, include 1 button
    buttonDisplayed = (
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>{primaryButtonText}</Text>
        </Pressable>
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
    borderWidth: 1,
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
    borderColor: "#898686",
    borderWidth: 1,
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
    backgroundColor: "#263E20",
  },
  buttonClose: {
    backgroundColor: "#C2D8A4",
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
