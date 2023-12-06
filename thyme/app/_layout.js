import { Tabs } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Ionicons from "@expo/vector-icons/Ionicons";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
    <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
    <Tabs.Screen
        name="log/index"
        options={{
          tabBarLabel: "Log",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="checkcircleo" size={size} color={color} />
          ),
        }}
      />  
    <Tabs.Screen
        name="connections/index"
        options={{
          tabBarLabel: "Connections",
          tabBarIcon: ({ size, color }) => (
            <Entypo name="slideshare" size={size} color={color} />
          ),
        }}
      />
    <Tabs.Screen
        name="settings/index"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
