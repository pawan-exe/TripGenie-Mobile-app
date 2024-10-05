import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CreateTripContext } from "./../../context/CreateTripContext";
import moment from "moment";
import { TouchableOpacity } from "react-native";

const ReviewTrip = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text style={{ fontFamily: "outfit-bold", fontSize: 35, marginTop: 20 }}>
        Review your trip
      </Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
          Before generating your trip, please review your selection
        </Text>
        <View
          style={{
            marginTop: 40,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text style={{ fontSize: 30 }}>📍</Text>
          <View>
            <Text
              style={{ fontFamily: "outfit", fontSize: 20, color: Colors.GRAY }}
            >
              Destination
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
                width: "85%",
              }}
            >
              {tripData?.locationInfo?.name}
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text style={{ fontSize: 30 }}>🗓️</Text>
          <View>
            <Text
              style={{ fontFamily: "outfit", fontSize: 20, color: Colors.GRAY }}
            >
              Travel Date
            </Text>
            <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
              {moment(tripData?.startDate).format("DD MMM") +
                " To " +
                moment(tripData?.endDate).format("DD MMM") +
                "  "}
              ({tripData?.totalNoOfDays} days)
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text style={{ fontSize: 30 }}>🚌</Text>
          <View>
            <Text
              style={{ fontFamily: "outfit", fontSize: 20, color: Colors.GRAY }}
            >
              Who is Traveling
            </Text>
            <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
              {tripData?.traveller?.title}
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text style={{ fontSize: 30 }}>💰</Text>
          <View>
            <Text
              style={{ fontFamily: "outfit", fontSize: 20, color: Colors.GRAY }}
            >
              Budget
            </Text>
            <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
              {tripData?.budget}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => router.replace("/create-trip/generate-trip")}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 80,
        }}
      >
        <Text
          style={{ color: Colors.WHITE, fontSize: 20, textAlign: "center" }}
        >
          Build my trip
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewTrip;
