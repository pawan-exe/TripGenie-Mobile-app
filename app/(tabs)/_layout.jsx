import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tabs.Screen
        name="mytrip"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="location-sharp" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="globe-sharp" size={24} color="black" />
          ),
        }}
        name="discover"
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-sharp" size={24} color="black" />
          ),
        }}
        name="profile"
      />
    </Tabs>
  );
};

export default TabLayout;
