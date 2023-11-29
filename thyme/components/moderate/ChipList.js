import React from "react";
import { Chip } from "react-native-paper";
import { Dimensions, StyleSheet, Text, View, Pressable } from "react-native";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

// List of Chips
const ChipList = (props) => {
  const symptoms = ["Drowsy", "Headache", "Anxiety", "Loss of Appetite"];
  return (
    <View style={styles.chipContainer}>
      <Chip style={styles.chip}>
        <Text style={styles.chipText}>Sample text</Text>
      </Chip>
      <Chip style={styles.chip}>
        <Text style={styles.chipText}>Headache</Text>
      </Chip>
      <Chip style={styles.chip}>
        <Text style={styles.chipText}>Fatigue</Text>
      </Chip>
      <Chip style={styles.chip}>
        <Text style={styles.chipText}>Sample text</Text>
      </Chip>
    </View>
  );
};

const styles = StyleSheet.create({
  chipContainer: {
    backgroundColor: "#F0F6E6",
    borderRadius: "10",
    flexDirection: "row",
    flexWrap: "wrap",
    width: windowWidth * 0.9,
  },
  chip: {
    backgroundColor: "#B9DEB8",
    margin: 4,
  },
  chipText: {
    color: "black",
  },
});

export default ChipList;
