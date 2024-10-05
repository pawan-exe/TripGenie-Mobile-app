import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { GetPhotoRef } from "../../services/GooglePlaceApi";

const HotelCard = ({ item }) => {
  const [photoRef, setPhotoRef] = useState();

  useEffect(() => {
    GetGooglePhotoRef();
  }, []);

  const GetGooglePhotoRef = async () => {
    const result = await GetPhotoRef(item?.name);
    setPhotoRef(result?.results[0]?.photos[0]?.photo_reference);
  };

  return (
    <View style={{ marginRight: 20, width: 180 }}>
      <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
            photoRef +
            "&key=AIzaSyBqn6Z6ddVRnsdKVUFLozIa7nWkDkZMxjs",
        }}
        style={{ width: 180, height: 120, borderRadius: 15 }}
      />
      <View style={{ padding: 5 }}>
        <Text style={{ fontFamily: "outfit-medium", fontSize: 17 }}>
          {item?.name}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontFamily: "outfit-regular" }}>
            ⭐ {item?.rating}
          </Text>
          <Text style={{ fontFamily: "outfit-regular" }}>💰 {item?.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default HotelCard;
