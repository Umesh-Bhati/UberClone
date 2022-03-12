import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import Icon from "react-native-vector-icons/AntDesign"

export default function WhereTo({whereToPress}) {

const [isVisible, setIsVisible] = useState(false)


  return (
    <View 
    style={{
      flexDirection: 'row',
      width: "90%",
      backgroundColor: "#EEEDEB",
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 5,
      marginVertical: 10,
      height:"6.5%"
    }} >
     <TouchableOpacity 
     style={{
       height: "80%",
       width: "50%",
       borderRightWidth: 2,
       borderRightColor: "#DCDCDC",
       justifyContent :"center",
       paddingLeft: 10 ,
       
     }}
     onPress={whereToPress} >
     <Text style={{
        color: "black",
        fontWeight: "600",
        fontSize: 20
      }} >Where to?</Text>
     </TouchableOpacity>
     
      <TouchableOpacity 
      style={{
        flexDirection: 'row',
        backgroundColor: "white",
        padding:5,
        justifyContent:"center",
        alignItems: 'center',
        borderRadius:15,
        marginRight: 10
      }} 
      onPress={() => setIsVisible(true)} >
          <Icon name='clockcircle'  size={15} color="black" />
          <Text 
          style={{
            color: "black",
            marginHorizontal:5
          }} >
              Now
          </Text>
          <Icon name='down' size={10} color="black" />
      </TouchableOpacity>
      <Modal 
      visible={isVisible}
      transparent={true}
      animationType="slide"
      style={{
        flex:1,
        width: "100%",
        alignItems: "center"
      }}>
        <TouchableOpacity 
        style={{
          flex:1,
          backgroundColor: "rgba(0.5, 0.5, 0.5, 0.5)"
        }} 
        onPress={() => setIsVisible(!isVisible)}  />
        <View  
        style={{
          flex:.85,
          width:"100%",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: "white",
          
        }} >
        <Text 
        style={{
          fontSize: 25,
          fontWeight: "600",
          color: "black",
          
        }} >
          Here will be Schedule Trip Screen
        </Text>
        </View>
        </Modal>
    </View>
  )
}