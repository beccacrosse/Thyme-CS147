import React, { useState, useEffect } from "react";
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
import { getData, getAllData } from "../../asyncStorage";

const Logs = (props) => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  const size = 60;
  const [antibiotic1Taken, setAntibiotic1Taken] = useState(false);
  const [antibiotic2Taken, setAntibiotic2Taken] = useState(false);
  const [birthControlTaken, setBirthControlTaken] = useState(false);
  const [vitaminDTaken, setVitaminDTaken] = useState(false);

  const antibiotic1 = ["Antibiotics", "08:00"];
  const antibiotic2 = ["Antibiotics", "20:00"];
  const birthControl = ["Birth control", "08:00"];
  const vitaminD = ["Vitamin D", "10:00"];

  // Check if each medication has been taken and update state values;
  (async () => {
    try {
      let currArr = await getData("December 8, 2023");

      if (currArr != undefined) {
        currArr = JSON.parse(currArr);

        const occurenceAntibiotics = currArr.find((arr) =>
          arr.every((item, index) => item === antibiotic1[index])
        );

        if (occurenceAntibiotics) {
          setAntibiotic1Taken(true);
          console.log("antibiotic 1 has been taken");
        } else {
          console.log("antibiotic 1 has not been taken");
        }

        const occurenceAntibiotics2 = currArr.find((arr) =>
          arr.every((item, index) => item === antibiotic2[index])
        );

        if (occurenceAntibiotics2) {
          setAntibiotic2Taken(true);
          console.log("antibiotic 2 has been taken");
        } else {
          console.log("antibiotic 2 has not been taken");
        }

        const occurenceBirthControl = currArr.find((arr) =>
          arr.every((item, index) => item === birthControl[index])
        );

        if (occurenceBirthControl) {
          setBirthControlTaken(true);
          console.log("birth control has been taken");
        } else {
          console.log("birth control has not been taken");
        }

        const occurenceVitaminD = currArr.find((arr) =>
          arr.every((item, index) => item === vitaminD[index])
        );

        if (occurenceVitaminD) {
          setVitaminDTaken(true);
          console.log("vitamin D has been taken");
        } else {
          console.log("vitamin D has not been taken");
        }
      } else {
        console.log("didn't work");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  })();

  // let antibiotic1View = (
  //   <View>
  //     <Text>Empty Antibiotic1</Text>
  //   </View>
  // );

  if (antibiotic1Taken) {
    antibiotic1View = (
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
          <Card.Title title="Antibiotic" subtitle="Taken at 8:00" />
        </View>
      </Card>
    );
  } else {
    antibiotic1View = <View></View>;
  }

  if (antibiotic2Taken) {
    antibiotic2View = (
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
          <Card.Title title="Antibiotic" subtitle="Taken at 20:00" />
        </View>
      </Card>
    );
  } else {
    antibiotic2View = <View></View>;
  }

  if (birthControlTaken) {
    birthControlView = (
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
          <Card.Title title="Birth Control" subtitle="Taken at 10:00" />
        </View>
      </Card>
    );
  } else {
    birthControlView = <View></View>;
  }

  if (vitaminDTaken) {
    vitaminDView = (
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
          <Card.Title title="Vitamin D" subtitle="Taken at 10:00" />
        </View>
      </Card>
    );
  } else {
    vitaminDView = <View></View>;
  }

  if (
    vitaminDTaken ||
    birthControlTaken ||
    antibiotic1Taken ||
    antibiotic2Taken
  ) {
    todaysText = (
      <View>
        <Text style={styles.subheaderText}>December 8, 2023</Text>
      </View>
    );
  } else {
    todaysText = <View></View>;
  }

  let todaysLog = (
    <View>
      {todaysText}
      {antibiotic1View}
      {antibiotic2View}
      {birthControlView}
      {vitaminDView}
    </View>
  );

  return (
    <ScrollView style={{ backgroundColor: Styles.contentBackground }}>
      <View style={styles.sectionContainer}>
        {todaysLog}
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
            <Card.Title title="Antibiotic" subtitle="Taken at 8:00" />
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
            <Card.Title title="Birth Control" subtitle="Taken at 10:00" />
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
            <Card.Title title="Vitamin D3" subtitle="Taken at 10:00" />
          </View>
        </Card>

        <Text style={styles.subheaderText}>October 31, 2023</Text>
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
            <Card.Title title="Antibiotic" subtitle="Taken at 8:00" />
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
            <Card.Title title="Birth Control" subtitle="Taken at 10:00" />
          </View>
        </Card>

        <Text style={styles.subheaderText}>October 30, 2023</Text>
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
            <Card.Title title="Antibiotic" subtitle="Taken at 8:00" />
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
            <Card.Title title="Birth Control" subtitle="Taken at 10:00" />
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
            <Card.Title title="Vitamin D" subtitle="Taken at 10:00" />
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
