import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from "react-native-vector-icons/AntDesign";
import Offer from "react-native-vector-icons/MaterialIcons";

export default function PromotionHeader() {
  return (
    <View
    style={{
        width:"90%",
        padding:3,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#47366A",
        borderRadius: 8,
        marginVertical: 20
    }} >
    <View>
    <Text style={{
        color: "white",
        fontWeight: "600"
    }} >50% discount up to</Text>
      <Text style={{
          color: 'white',
          fontWeight: "600",
          marginBottom: 15
      }} >Rs80</Text>
     <TouchableOpacity>
     <Text style={{
          color: "white",
          fontSize: 12
      }} >Add UBAPAYMAR <Icon name="arrowright" color={"white"} /> </Text>
     </TouchableOpacity>
    </View>
    <Offer name="local-offer" size={90} color="white" />
    </View>
  )
}