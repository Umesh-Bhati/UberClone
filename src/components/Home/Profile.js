import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import PersonIcon from 'react-native-vector-icons/Ionicons';
import ReuseIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Profile() {

    const [isVisible, setIsVisible] = useState(false)


  const profileReuseableComponetData = [
    [
      {
        name: 'help',
        title: 'Help',
      },
      {
        name: 'wallet',
        title: 'wallet',
      },
      {
        name: 'clock',
        title: 'Trips',
      },
    ],
    [
      {
        name: 'message',
        title: 'Messages',
      },
      {
        name: 'gift',
        title: 'Send a gift',
      },
      {
        name: 'human-scooter',
        title: 'drive or deliver with uberClon',
      },
      {
        name: 'power-settings',
        title: 'settings',
      },
      {
        name: 'halloween',
        title: 'Legal',
      },
    ],
  ];

  const ReusebaleComponent = ({name, size, title, inHelpBlock, containerStyle, textStyle}) => (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: "space-around",
        flexDirection: inHelpBlock === true ? 'column' : 'row',
        ...containerStyle
      }}>
      <ReuseIcon name={name} size={size} color="black" />
      <Text
        style={{
          marginLeft: 10,
          textTransform: 'capitalize',
          fontSize: 20,
          color: "black",
          fontWeight: '500',
          ...textStyle
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <>
      <TouchableOpacity
        style={{
          borderRadius: 20,
          backgroundColor: 'gray',
          height: 40,
          width: 40,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-end',
          marginRight: 25,
          marginTop: 10,
        }} 
        onPress={() => setIsVisible(!isVisible)} >
        <PersonIcon name="person" size={30} color="white" />
      </TouchableOpacity>

      <Modal 
      visible={isVisible}
      animationType="slide"
      style={{
          backgroundColor:"white",
          padding:10
          }} >
        <Icon name="cross" size={40} color="black" onPress={() => setIsVisible(!isVisible)} />
        <View style={{
            flexDirection:"row",
            alignItems: "center",
            justifyContent:"space-between",
            paddingHorizontal:10,
            marginVertical:10,
        }} >
          <View  style={{
              flexBasis:"70%",
              justifyContent:"space-between",
          }}  >
            <Text 
            style={{
                fontSize:40,
                color: "black",
                fontWeight: "500"

            }} >Umesh Bhati</Text>
            <View style={{
                flexDirection: "row",
                justifyContent:"space-between",
                paddingHorizontal:5,
                alignItems:"center",
                height:25,
                width:50,
                borderRadius:12,
                backgroundColor: "#F6F6F5",
                marginTop: 10

            }} >
              <Icon name="star" size={12} color="black" />
              <Text>5.0</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              borderRadius: 25,
              backgroundColor: 'gray',
              height: 50,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
             
             
            }}>
            <PersonIcon name="person" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View 
        style={{
            flexDirection:"row",
            justifyContent:"space-between",
            paddingHorizontal: 10,
            marginVertical: 10
        }} >
          {profileReuseableComponetData[0].map((item, index) => (
            <TouchableOpacity 
            key={index.toString()} 
            style={{
                height: 80,
                width:100,
                borderRadius:10,
                backgroundColor: "#F6F6F5",
                justifyContent:"center",
                alignItems: "center"
            }} >
                <ReusebaleComponent
              name={item.name}
              title={item.title}
              inHelpBlock={true}
              size={25}
            />
            </TouchableOpacity>
          ))}
        </View>
        <View 
        style={{
            paddingHorizontal: 10,
            flex:.7,
            justifyContent: "space-around",
        }} >
            {
                profileReuseableComponetData[1].map((item, index) => (
                    <ReusebaleComponent 
                    key={index.toString()}
                    name={item.name}
                    title={item.title} 
                    size={25}
                    containerStyle={{
                        justifyContent: "flex-start"
                    }}
                      />
                ))
            }
        </View>
        <Text style={{
            position: "absolute",
            bottom:30,
            left:10,
            fontSize: 17,
            opacity:.6,
            color: "gray"
        }} >v4.499.1000</Text>
      </Modal>
    </>
  );
}
