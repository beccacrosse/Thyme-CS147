import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { Images } from "../../assets/themes";
import { Ionicons } from "@expo/vector-icons";

// A Profile Image
const Profile = (props) => {
  const size = props.profileSize; // Size of the profile image, used for both width and height
  const image = props.profileImage; // Image for the profile

  // TO DO: Control whether profile image is pressable
  return (
    <View>
      <View style={styles.profileContainer}>
        <Image
          source={image}
          style={[
            styles.icon,
            { width: size, height: size, borderWidth: size * 0.07 },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    borderRadius: "50%",
    borderColor: "#263E20",
  },
  icon: {
    borderColor: "#263E20",
    borderRadius: "360%",
    resizeMode: "contain",
  },
});

export default Profile;
