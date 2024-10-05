import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

const Discover = () => {
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontFamily: "outfit-bold", fontSize: 35 }}>
          Discover
        </Text>
      </View>
    </View>
  );
};

export default Discover;