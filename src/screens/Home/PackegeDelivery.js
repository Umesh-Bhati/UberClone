import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/AntDesign"

export default function PackegeDelivery({navigation}) {
  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal: 10,
        
    }}   >
      <TouchableOpacity 
      style={{
          height:50,
          width: 50,
          borderRadius: 25,
          backgroundColor: "white",
          elevation: 7,
          justifyContent:"center",
          alignItems: "center",
          position: "absolute",
          top:10,
          left: 10,
          zIndex:99
      }} 
      onPress={() => navigation.goBack()}  >
          <Icon name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
      <View 
      style={{
          justifyContent:"center",
          alignItems:"center",
          marginVertical:20,
      }} >
      <Image 
       source={require("../../assets/packegeScreenImg.png")}
       style={{
           resizeMode:"cover",
           width:"100%"
       }} />
      </View>
      <View 
      style={{
          marginVertical:10
      }}
       >
          <Text 
          style={{
              fontSize: 30,
              fontWeight: "600",
              color: "black",
              marginVertical:10
          }} >Send packages with Connect</Text>
          <Text 
          style={{
              fontSize: 20,
              fontWeight: "600"
          }} >Get it delivered in the time takes to drive there</Text>
      </View>

      {/* btns */}
      <TouchableOpacity 
      style={{
          width:"100%",
          height: 50,
          backgroundColor: "black",
          justifyContent: 'center',
          alignItems: "center",
          marginVertical:10
      }} >
          <Text 
          style={{
              color: "white",
              fontSize: 20,
              fontWeight: "600"
          }} >Send a package</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={{
          width:"100%",
          height: 50,
          backgroundColor: "#f3f3f7",
          justifyContent: 'center',
          alignItems: "center",
          marginVertical:10
      }} >
          <Text 
          style={{
              color: "black",
              fontSize: 20,
              fontWeight: "600"
          }} >Receive a package</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}