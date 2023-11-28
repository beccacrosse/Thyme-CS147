import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { Images } from "../../assets/themes";
import { Ionicons } from "@expo/vector-icons";

// A Profile Image
const Profile = (props) => {
  const size = props.profileSize; // Size of the profile image, used for both width and height
  const image = props.profileImage; // Image for the profile

  return (
    <View>
      <Pressable>
        <View style={[styles.profileContainer, { borderWidth: size * 0.07 }]}>
          <Image
            source={image}
            style={[styles.icon, { width: size, height: size }]}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    borderRadius: "50%",
    borderColor: "#263E20",
  },
  icon: {
    borderRadius: "50%",
    resizeMode: "contain",
  },
});

export default Profile;
