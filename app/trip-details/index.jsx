import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import moment from "moment";
import FlightInfo from "../../components/TripDetails/FlightInfo";
import HotelList from "../../components/TripDetails/HotelList";
import PlannedTrip from "../../components/TripDetails/PlannedTrip";

const TripDetails = () => {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState();

  const formatData = (data) => {
    return JSON.parse(data);
  };

  useEffect(() => {
    navigation.setOptions({
      headerShow: true,
      headerTransparent: true,
      headerTitle: "",
    });
    setTripDetails(JSON.parse(trip));
  }, []);
  return (
    tripDetails && (
      <ScrollView>
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
              formatData(tripDetails?.tripData).locationInfo?.photoRef +
              "&key=AIzaSyBqn6Z6ddVRnsdKVUFLozIa7nWkDkZMxjs",
          }}
          style={{ width: "100%", height: 330 }}
        />
        <View
          style={{
            padding: 15,
            backgroundColor: Colors.WHITE,
            height: "100%",
            marginTop: -30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <Text style={{ fontSize: 25, fontFamily: "outfit-bold" }}>
            {tripDetails?.tripPlan.trip_details.destination}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              marginTop: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-regular",
                fontSize: 18,
                color: Colors.GRAY,
              }}
            >
              {moment(formatData(tripDetails.tripData).startDate).format(
                "DD MMM yyyy"
              )}
            </Text>
            <Text
              style={{
                fontFamily: "outfit-regular",
                fontSize: 18,
                color: Colors.GRAY,
              }}
            >
              -
              {moment(formatData(tripDetails.tripData).endDate).format(
                "DD MMM yyyy"
              )}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "outfit-regular",
              fontSize: 17,
              color: Colors.GRAY,
            }}
          >
            🚌 {formatData(tripDetails.tripData)?.traveller?.title}
          </Text>

          {/* flight Info */}
          <FlightInfo flightData={tripDetails?.tripPlan?.flights[0]} />
          {/* Hotels plan */}
          <HotelList hotelList={tripDetails?.tripPlan?.hotels} />
          {/* Trip day planner info */}
          <PlannedTrip itinerary={tripDetails?.tripPlan?.itinerary} />
        </View>
      </ScrollView>
    )
  );
};

export default TripDetails;
