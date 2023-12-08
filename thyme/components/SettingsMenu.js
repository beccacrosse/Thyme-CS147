import React from "react";
import {
  StyleSheet,
  Dimensions,
  Image,
  Text,
  View,
  Pressable,
} from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import { Styles, Images } from "../assets/themes";
import { Divider } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

const SettingsMenu = (props) => {
  const size = 60;

  return (
    <View style={styles.sectionContainer}>
      <Card style={{ backgroundColor: "white" }}>
        <View
          style={{
            borderBottom: "solid black",
            borderColor: "black",
            width: "full",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Card.Content>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </Card.Content>
          <Card.Title title="Notifications" />
        </View>
        <Divider width={0.4} color={"black"} />
        <View
          style={{
            width: "full",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Card.Content>
            <Entypo name="slideshare" size={24} color="black" />
          </Card.Content>
          <Card.Title title="Connections" />
        </View>
        <Divider width={0.4} color={"black"} />
        <View
          style={{
            width: "full",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Card.Content>
            <AntDesign name="medicinebox" size={24} color="black" />
          </Card.Content>
          <Card.Title title="Medications" />
        </View>
        <Divider width={0.4} color={"black"} />
        <View
          style={{
            width: "full",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Card.Content>
            <Ionicons name="leaf-outline" size={24} color="black" />
          </Card.Content>
          <Card.Title title="Garden" />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    width: windowWidth * 0.9,
  },
});

export default SettingsMenu;
