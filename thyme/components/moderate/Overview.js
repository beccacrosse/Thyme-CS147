import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Styles, Images } from "../../assets/themes";
import { Avatar, Button, Card } from "react-native-paper";
import ChipList from "./ChipList";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

const Overview = (props) => {
  //const LeftContent = (props) => <Image {...props} source={Images.avitanImage} />;
  const size = 60;
  return (
    <ScrollView style={{ backgroundColor: Styles.contentBackground }}>
      <View style={styles.sectionContainer}>
        <Text style={styles.subheaderText}>Patient Information</Text>
        <Card style={{ backgroundColor: "white" }}>
          <Card.Content>
            <Text variant="bodyMedium">
              <Text style={{ fontWeight: "bold" }}> Patient Name: </Text> Anna
              Gao
            </Text>
            <Text variant="bodyMedium">
              <Text style={{ fontWeight: "bold" }}> Date of Birth: </Text>
              September 1, 2002
            </Text>
            <Text variant="bodyMedium">
              <Text style={{ fontWeight: "bold" }}> Insurance Provider: </Text>
              Kaiser
            </Text>
          </Card.Content>
        </Card>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.subheaderText}>Current Medications</Text>
        <Card style={{ backgroundColor: "white" }}>
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
              <Image
                style={[styles.icon, { width: size, height: size }]}
                source={Images.bluePill}
              />
            </Card.Content>
            <Card.Title
              title="Antibiotic"
              subtitle="Schedule: 2 times per day"
            />
          </View>

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
              <Image
                style={[styles.icon, { width: size, height: size }]}
                source={Images.bluePill}
              />
            </Card.Content>
            <Card.Title
              title="Birth Control"
              subtitle="Schedule: Daily - Morning"
            />
          </View>
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
              <Image
                style={[
                  styles.icon,
                  { width: size, height: size, flexShrink: 0 },
                ]}
                source={Images.d3}
              />
            </Card.Content>
            <Card.Title
              title="Vitamin D3"
              subtitle="Schedule: Daily - Morning"
            />
          </View>
        </Card>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.subheaderText}>Symptoms</Text>
        <Card style={{ backgroundColor: "white" }}>
          <Card.Content>
            <ChipList
              chipValues={["Headache", "Fatigue", "Anxiety", "Nausea"]}
            />
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
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

export default Overview;
