import React from "react";
import { Chip } from "react-native-paper";
import { Dimensions, StyleSheet, Text, View, Pressable } from "react-native";
import { Styles } from "../../assets/themes";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

// List of Chips
const ChipList = (props) => {
  const values = props.chipValues; // Array of values contained within the chips

  if (values) {
    chips = values.map((item) => {
      return (
        <Chip style={styles.chip}>
          <Text style={styles.chipText}>{item}</Text>
        </Chip>
      );
    });
  } else {
    chips = <View></View>;
  }

  return <View style={styles.chipContainer}>{chips}</View>;
};

const styles = StyleSheet.create({
  chipContainer: {
    //backgroundColor: Styles.inputFieldColor,
    borderRadius: "10",
    flexDirection: "row",
    flexWrap: "wrap",
    width: windowWidth * 0.9,
  },
  chip: {
    backgroundColor: Styles.backgroundColor,
    margin: 4,
  },
  chipText: {
    color: "black",
  },
});

export default ChipList;
