import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ReportPage from "./ReportPage";
import BackButton from "../shared/BackButton";
import MainButton from "../shared/MainButton";
import Profile from "../shared/Profile";
import { Images } from "../../assets/themes";
import ReportTabs from "./ReportTabs";
import { Styles } from "../../assets/themes";
import { Button, Overlay } from "react-native-elements";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

const ReportModal = (props) => {
  //          isVisible={modalVisible}
  //visibilityFunction={handleVisibility}
  //handleReportSent = {handleReportSent}
  const [visibleShare, setVisible] = useState(false); // Visibility of Report Share Overlay
  const [visibleSent, setSentOverlayVisible] = useState(false); // Visibility Report Sent Overlay

  // Toggle Visibility of Report Share Overlay
  const toggleShareOverlay = () => {
    setVisible(!visibleShare);
  };

  // Toggle Visibility of Report Share and Report Sent Overlay
  const toggleShareAndSentOverlay = () => {
    props.handleReportSent();
    setVisible(!visibleShare);
    //await delay(5000);
    setSentOverlayVisible(!visibleSent);
  };

  // Toggle Visibility of Report Sent Overlay
  const toggleSentOverlay = () => {
    setSentOverlayVisible(!visibleSent);
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.isVisible}
      // onRequestClose={() => {
      //   Alert.alert("Modal has been closed.");
      //   setModalVisible(!modalVisible);
      // }}
    >
      <LinearGradient
        // Background Linear Gradient
        style={Styles.container}
        colors={["#C2D8A4", "rgba(194, 216, 164, 0.00)"]}
        start={{ x: 0.6, y: 0.4 }}
      >
        {/* <ScrollView> */}
        <SafeAreaView
          style={{ display: "flex", flexDirection: "column", top: 40 }}
        >
          <View>
            <Overlay
              isVisible={visibleShare}
              onBackdropPress={toggleShareOverlay}
              style={{ backgroundColor: Styles.inputFieldColor }}
            >
              <View>
                <View style={styles2.modalView}>
                  <Text style={styles2.modalTitleText}>Share Report?</Text>
                  <Text style={styles2.modalBodyText}>
                    Please confirm whether you would like Thyme to share your
                    medication report with Doctor Cyan.
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <MainButton
                      buttonText="Cancel"
                      buttonAction={toggleShareOverlay}
                      isDefault={false}
                    />
                    <MainButton
                      buttonText="Share"
                      buttonAction={toggleShareAndSentOverlay}
                      isDefault={true}
                    />
                  </View>
                </View>
              </View>
            </Overlay>
          </View>
          <View>
            <Overlay
              isVisible={visibleSent}
              onBackdropPress={toggleSentOverlay}
              style={{ backgroundColor: Styles.inputFieldColor }}
            >
              <View>
                <View style={styles2.modalView}>
                  <Text style={styles2.modalTitleText}>Report Sent</Text>
                  <Text style={styles2.modalBodyText}>
                    Your medication report has been sent to Doctor Cyan.
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <MainButton
                      buttonText="Okay"
                      buttonAction={toggleSentOverlay}
                      isDefault={true}
                    />
                  </View>
                </View>
              </View>
            </Overlay>
          </View>
          <View>
            <BackButton
              style={{ alignSelf: "flex-start" }}
              buttonAction={() => props.visibilityFunction()}
            />
            <View style={{...styles.profile, top: -20}}>
              <Profile profileImage={Images.anna} profileSize={160} />
            </View>
          </View>
          <ReportTabs />
          <View style={styles.buttonContainer}>
            <View style={styles.button2}>
              <MainButton buttonText="Save PDF" buttonAction={() => {}} />
            </View>
            <View style={styles.button2}>
              <MainButton
                buttonText="Share"
                buttonAction={toggleShareOverlay}
              />
            </View>
          </View>
        </SafeAreaView>
        {/* </ScrollView> */}
      </LinearGradient>
    </Modal>
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
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  button2: {
    margin: 10,
  },
  buttonContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    width: windowWidth,
    height: windowHeight * 0.1,
  },
  profile: {
    alignItems: "center",
    marginBottom: 10,
  },
  shareModalContainer: {
    backgroundColor: "red",
    height: windowHeight,
    width: windowWidth,
    //position: "absolute",
    zIndex: 2,
  },
});

const styles2 = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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

export default ReportModal;
