import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GetPhotoRef } from "../../services/GooglePlaceApi";

const PlaceCard = ({ scheduleItem, scheduleIndex }) => {
  const [photoRef, setPhotoRef] = useState();

  useEffect(() => {
    GetGooglePhotoRef();
  }, []);

  const GetGooglePhotoRef = async () => {
    const result = await GetPhotoRef(scheduleItem.activity);
    setPhotoRef(result?.results[0]?.photos[0]?.photo_reference);
  };

  return (
    <View
      style={{
        backgroundColor: Colors.LIGHT_GRAY,
        padding: 10,
        borderRadius: 15,
        borderColor: Colors.GRAY,
        marginTop: 20,
      }}
      key={scheduleIndex}
    >
      <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
            photoRef +
            "&key=AIzaSyBqn6Z6ddVRnsdKVUFLozIa7nWkDkZMxjs",
        }}
        style={{ width: "100%", height: 120, borderRadius: 15 }}
      />
      <View style={{ marginTop: 5 }} />
      <Text style={{ fontFamily: "outfit-medium", fontSize: 17 }}>
        {scheduleItem.activity}
      </Text>
      <Text
        style={{
          fontFamily: "outfit-regular",
          fontSize: 15,
          color: Colors.GRAY,
        }}
      >
        {scheduleItem.description}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-regular",
            fontSize: 17,
            marginTop: 5,
          }}
        >
          ⌚ Time : {scheduleItem?.time}
        </Text>
        <TouchableOpacity>
          <Ionicons name="navigate-circle-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>
      {/* <Text >
      💴 Ticket Price : {scheduleItem?.ticket_pricing || "Free"}
    </Text> */}
    </View>
  );
};

export default PlaceCard;
