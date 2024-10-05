import { View, Text, Image } from "react-native";
import { Colors } from "../../constants/Colors";
import React from "react";
import moment from "moment";

const UserTripCard = ({ trip }) => {
  const formatData = (data) => {
    return JSON.parse(data);
  };
  return (
    <View
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
      }}
    >
      {/* <Image
        source={require("./../../assets/images/placeholderimg.png")}
        style={{ width: 100, height: 100, borderRadius: 15 }}
      /> */}
      <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
            formatData(trip.tripData)?.locationInfo?.photoRef +
            "&key=AIzaSyBqn6Z6ddVRnsdKVUFLozIa7nWkDkZMxjs",
        }}
        style={{ width: 100, height: 100, borderRadius: 15 }}
      />
      <View>
        <Text style={{ fontFamily: "outfit-medium", fontSize: 18 }}>
          {trip?.tripPlan?.trip_details?.destination}
        </Text>
        <Text
          style={{
            fontFamily: "outfit-regular",
            fontSize: 14,
            color: Colors.GRAY,
          }}
        >
          {moment(formatData(trip.tripData).startDate).format("DD MMM yyyy")}
        </Text>
        <Text
          style={{
            fontFamily: "outfit-regular",
            fontSize: 14,
            color: Colors.GRAY,
          }}
        >
          Traveling :{formatData(trip.tripData).traveller.title}
        </Text>
      </View>
    </View>
  );
};

export default UserTripCard;
