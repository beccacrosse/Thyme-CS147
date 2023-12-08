import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  Dimensions,
} from "react-native";
import { Overlay } from "react-native-elements";
import { Button } from "../shared/MainButton";
import MainButton from "../shared/MainButton";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
const ReminderModal = ({ visible, content, visibilityFunction,name,handleReminderSent }) => {
  const [secondModalVisible, setSecondModalVisible] = useState(false);
  function handleSecond() {
    setSecondModalVisible(true);
    handleReminderSent();
  }

  return (
    <View>
      <Overlay isVisible={visible} onBackdropPress={visibilityFunction}>
        <Overlay isVisible = {secondModalVisible} onBackdropPress={() => setSecondModalVisible(false)}>
          <View style={styles2.modalView2}>
            <Text style={styles2.modalTitleText2}>
              A reminder has been sent to {name} today!
            </Text>
            <MainButton
              buttonText="Okay"
              buttonAction={ visibilityFunction }
              //   isDefault={true}
            />
          </View>
        </Overlay>
        <View style={styles2.modalView}>
          <Text style={styles2.modalTitleText}>Send Reminder? </Text>
          <Text style={styles2.modalBodyText}>{content}</Text>
          <View style={{ flexDirection: "row" }}>
            <MainButton
              buttonText="Okay"
              buttonAction={handleSecond}
              //   isDefault={true}
            />
          </View>
        </View>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 17,
  },
});

const styles2 = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView2: {
    margin: 20,
    //backgroundColor: "#E5ECDA",
    borderColor: "#898686",
    //borderWidth: 1,
    borderRadius: 20,
    //padding: 25,
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    elevation: 5,
    width: windowWidth * 0.6,
    height: windowHeight * 0.21
  },
  modalTitleText2: {
    fontSize: 22, // Size of Title Font
    fontWeight: "bold",
    marginBottom: 40,
    margin: 5,
    textAlign: "center",
  },
  modalView: {
    margin: 20,
    //backgroundColor: "#E5ECDA",
    borderColor: "#898686",
    //borderWidth: 1,
    borderRadius: 20,
    //padding: 25,
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    elevation: 5,
    width: windowWidth * 0.6,
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

export default ReminderModal;
