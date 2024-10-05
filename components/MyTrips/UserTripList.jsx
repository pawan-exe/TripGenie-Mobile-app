import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment/moment";
import { Colors } from "../../constants/Colors";
import UserTripCard from "./UserTripCard";
import { useRouter } from "expo-router";

const UserTripList = ({ userTrips }) => {
  const latestTrip = JSON.parse(userTrips[0].tripData);
  const router = useRouter();

  return (
    <View>
      <View style={{ marginTop: 20 }}>
        {latestTrip?.locationInfo?.photoRef ? (
          <Image
            source={{
              uri:
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
                latestTrip?.locationInfo?.photoRef +
                "&key=AIzaSyBqn6Z6ddVRnsdKVUFLozIa7nWkDkZMxjs",
            }}
            style={{
              width: "100%",
              height: 240,
              objectFit: "cover",
              borderRadius: 15,
            }}
          />
        ) : (
          <Image
            source={require("./../../assets/images/placeholderimg.png")}
            style={{
              width: "100%",
              height: 240,
              objectFit: "cover",
              borderRadius: 15,
            }}
          />
        )}
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "outfit-medium", fontSize: 24 }}>
            {userTrips[0]?.tripPlan?.trip_details?.destination}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-regular",
                fontSize: 17,
                color: Colors.GRAY,
              }}
            >
              {moment(latestTrip.startDate).format("DD MMM yyyy")}
            </Text>
            <Text
              style={{
                fontFamily: "outfit-regular",
                fontSize: 17,
                color: Colors.GRAY,
              }}
            >
              🚌 {latestTrip?.traveller?.title}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.PRIMARY,
              padding: 15,
              borderRadius: 15,
              marginTop: 10,
            }}
            onPress={() =>
              router.push({
                pathname: "/trip-details",
                params: { trip: JSON.stringify(userTrips[0]) },
              })
            }
          >
            <Text
              style={{
                color: Colors.WHITE,
                textAlign: "center",
                fontFamily: "outfit-medium",
                fontSize: 15,
              }}
            >
              See your plan
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 75 }}>
          {userTrips.map((trip, index) => (
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/trip-details",
                  params: { trip: JSON.stringify(userTrips[index]) },
                })
              }
            >
              <UserTripCard trip={trip} key={index} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default UserTripList;
