import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

const OptionCard = ({ option, selectedOption }) => {
  return (
    <View
      style={[
        {
          padding: 22,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: Colors.LIGHT_GRAY,
          borderRadius: 15,
        },
        selectedOption?.id == option?.id && { borderWidth: 3 },
      ]}
    >
      <View>
        <Text style={{ fontSize: 20, fontFamily: "outfit-bold" }}>
          {option?.title}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontFamily: "outfit-regular",
            color: Colors.GRAY,
          }}
        >
          {option?.desc}
        </Text>
      </View>

      <Text style={{ fontSize: 36 }}>{option?.icon}</Text>
    </View>
  );
};

export default OptionCard;
