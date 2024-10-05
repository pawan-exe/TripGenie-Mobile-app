import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import PlaceCard from "./PlaceCard";

const PlannedTrip = ({ itinerary }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontFamily: "outfit-bold" }}>
        🌵 Plan Details
      </Text>

      {itinerary.map((dayObj, index) => (
        <View key={index}>
          <Text
            style={{ fontFamily: "outfit-medium", fontSize: 20, marginTop: 20 }}
          >
            Day {dayObj.day}
          </Text>
          {dayObj.schedule.slice(0, 2).map((scheduleItem, scheduleIndex) => (
            <PlaceCard
              scheduleItem={scheduleItem}
              scheduleIndex={scheduleIndex}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default PlannedTrip;
