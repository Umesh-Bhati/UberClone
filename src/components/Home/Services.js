import { TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'

export default function Services({img, serviceName, navigationScreen, navigation}) {
  return (
    <TouchableOpacity style={{
        marginHorizontal:15,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
      }} 
      onPress={() => navigation.navigate(navigationScreen)} >
       
          <Image source={img} style={{
            borderRadius: 7,
            marginVertical: 7
          }} />
          <Text 
          style={{
            letterSpacing: 1.5,
            color: "#373737"
          }} >{serviceName}</Text>
      </TouchableOpacity>
  )
}