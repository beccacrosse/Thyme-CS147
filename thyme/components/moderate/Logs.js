import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, Button, Card } from "react-native-paper";
import { Styles, Images } from "../../assets/themes";

const Logs = (props) => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  const size = 60;
  return (
    <ScrollView style={{ backgroundColor: Styles.contentBackground }}>
      <View style={styles.sectionContainer}>
        <Text style={styles.subheaderText}>December 7, 2023</Text>
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
            <Card.Title title="Antibiotic" subtitle="Taken at 8:00am" />
          </View>
        </Card>
        <Card style={{ backgroundColor: "white", marginTop: 10 }}>
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
            <Card.Title title="Birth Control" subtitle="Taken at 10:00am" />
          </View>
        </Card>
        <Card
          style={{ backgroundColor: "white", marginTop: 10, marginBottom: 20 }}
        >
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
                source={Images.d3}
              />
            </Card.Content>
            <Card.Title title="Vitamin D3" subtitle="Taken at 10:00am" />
          </View>
        </Card>

        <Text style={styles.subheaderText}>December 6, 2023</Text>
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
            <Card.Title title="Antibiotic" subtitle="Taken at 8:00am" />
          </View>
        </Card>
        <Card
          style={{ backgroundColor: "white", marginTop: 10, marginBottom: 20 }}
        >
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
            <Card.Title title="Birth Control" subtitle="Taken at 10:00am" />
          </View>
        </Card>

        <Text style={styles.subheaderText}>December 5, 2023</Text>
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
            <Card.Title title="Antibiotic" subtitle="Taken at 8:00am" />
          </View>
        </Card>
        <Card style={{ backgroundColor: "white", marginTop: 10 }}>
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
            <Card.Title title="Birth Control" subtitle="Taken at 10:00am" />
          </View>
        </Card>
        <Card
          style={{ backgroundColor: "white", marginTop: 10, marginBottom: 20 }}
        >
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
                source={Images.d3}
              />
            </Card.Content>
            <Card.Title title="Vitamin D3" subtitle="Taken at 10:00am" />
          </View>
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

export default Logs;
