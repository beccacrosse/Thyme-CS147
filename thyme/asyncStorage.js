import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Keyboard } from "react-native";

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
    console.log("error loading data");
  }
};

export const setData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log(key);
    getData(key);
  } catch (error) {
    // Error saving data
    console.log("error saving data");
  }
};

// References:
// https://reactnative.dev/docs/asyncstorage
// https://www.youtube.com/watch?v=OQlpcqhEIN8&ab_channel=MissCoding
// https://snack.expo.dev/@alan7cheng/cs-147l-autumn-2023-lecture-12---asyncstorage-live
