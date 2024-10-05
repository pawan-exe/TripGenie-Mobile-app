import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const StartNewTripCard = () => {
  const router = useRouter();

  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 22,
      }}
    >
      <Ionicons name="location" size={30} color="black" />
      <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
        No Trips planned yet
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontFamily: "outfit-regular",
          textAlign: "center",
          color: Colors.GRAY,
        }}
      >
        Looks like its time to plan a new travel experience! Get started below
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/create-trip/search-place")}
        style={{
          padding: 10,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          paddingHorizontal: 30,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: "outfit-regular",
            fontSize: 16,
          }}
        >
          Start a new trip
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartNewTripCard;
