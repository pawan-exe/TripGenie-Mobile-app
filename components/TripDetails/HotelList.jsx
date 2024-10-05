import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect } from "react";
import { GetPhotoRef } from "../../services/GooglePlaceApi";
import HotelCard from "./HotelCard";

const HotelList = ({ hotelList }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
        🏨 Hotel Recommendation
      </Text>
      <FlatList
        style={{ marginTop: 8 }}
        data={hotelList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => <HotelCard item={item} key={index} />}
      />
    </View>
  );
};

export default HotelList;
