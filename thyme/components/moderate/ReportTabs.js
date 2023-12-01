import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
} from "react-native";
import { Styles } from "../../assets/themes";
import { Tab, TabView } from "@rneui/themed";
import Overview from "./Overview";
import Logs from "./Logs";

const ReportTabs = (props) => {
  const [index, setIndex] = useState(0);

//  console.log(index);

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          opacity: 0,
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Overview"
          titleStyle={(active) => ({
            fontSize: 18,
            color: active ? Styles.inputFieldColor : "white",
          })}
          containerStyle={(active) => ({
            backgroundColor: active
              ? Styles.contentBackground
              : Styles.inputFieldColor,
          })}
        />
        <Tab.Item
          title="Logs"
          titleStyle={(active) => ({
            fontSize: 18,
            color: active ? Styles.inputFieldColor : "white",
          })}
          containerStyle={(active) => ({
            backgroundColor: active
              ? Styles.contentBackground
              : Styles.inputFieldColor,
          })}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          <Overview />
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          <Logs />
        </TabView.Item>
      </TabView>
    </>
  );
};

const styles = StyleSheet.create({
  patientInformationContainer: {
    margin: 20,
  },
  patientInformation: {
    backgroundColor: Styles.inputFieldColor,
    borderRadius: 5,
  },
  subheaderText: {
    color: Styles.buttonOutlineColor,
    fontSize: "18px",
    marginBottom: 10,
  },
  tabs: {
    backgroundColor: Styles.buttonOutlineColor,
  },
});

export default ReportTabs;

// References

// Tabs: https://reactnativeelements.com/docs/next/components/tab
