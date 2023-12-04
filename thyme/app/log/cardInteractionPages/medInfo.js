import * as React from 'react';
import { Dimensions, StyleSheet, View, Pressable } from 'react-native';
import { useLocalSearchParams } from "expo-router";
import { Stack } from 'expo-router';
import { Styles } from "../../../assets/themes";
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
export default function CheckIn() {

  return (
    <View style={styles.container}>
    <Stack.Screen
      options={{
        title: "Checkin",
        headerShown: false,
        headerStyle: {backgroundColor: Themes.colors.background},
        headerTitleStyle: {color: Themes.colors.white},
        headerLeft: ()=> (
          <Link href={'../'} asChild>
           <Pressable> 
            <Ionicons name="chevron-back" size={30} color={Themes.colors.white} /> 
           </Pressable>
          </Link>
        )
      }}
    />
    <LinearGradient
        // Background Linear Gradient
        style={Styles.container}
        colors={['#C2D8A4', 'rgba(194, 216, 164, 0.00)']}
        start={{x:0.6, y:0.4}}
        
      >
      <Text>Med info</Text>
    </LinearGradient>
    </View>
);
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    alignItems: "center",
  }
})