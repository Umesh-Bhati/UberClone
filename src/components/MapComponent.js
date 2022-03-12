import React, { Component, useEffect } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import { mapStyle} from "../global/mapStyle"
import MapView, { PROVIDER_GOOGLE,} from 'react-native-maps'; 
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API} from "@env"


export default  MapComponent = ({Origin, Destination}) => {

 
      _map = React.useRef(35)
   useEffect(()=>{
    setTimeout(()=>{
      if( Destination.latitude !== null){
        _map.current.fitToCoordinates(
          [Origin, Destination],{
            edgePadding:{top:450,right:50,left:50,bottom:350},
            animated:true
          }
        )
      }
    },500)
   },[ Destination.latitude ])

   
        return (
            <View style={{
              flex:1,
              justifyContent:"center",
              alignItems:"center"
            }} >
                <MapView
                    provider ={PROVIDER_GOOGLE}
                    style = {styles.map}
                    customMapStyle ={mapStyle}
                    ref = {_map}
                        >
                     { Origin.latitude != null &&   
                        <MapView.Marker coordinate = {Origin} anchor = {{x:0.3,y:0.3}} >
                            <Image 
                                source ={require('../assets/location.png')}
                                style ={styles.markerOrigin2}
                                resizeMode ="cover"
                            />
                        </MapView.Marker>
                     }
                     {  Destination.latitude != null &&   
                        <MapView.Marker coordinate = { Destination} anchor = {{x:0.3,y:0.3}} >
                            <Image 
                                source ={require('../assets/location.png')}
                                style ={styles.location}
                                resizeMode ="cover"
                            />
                        </MapView.Marker>
                     }
                    { Destination.latitude !== null &&
                        <MapViewDirections 
                          origin={Origin}
                          destination={ Destination}
                          apikey={GOOGLE_API}
                          strokeWidth={4}
                          strokeColor={"black"}
                        />
                    } 
                </MapView> 
            </View>
        )}
    


const styles = StyleSheet.create({
   map: {
        height:"100%",
         width:"100%"
        },

             view1: {
               width:7,
              height:7,
              backgroundColor:"white"
             },
             markerDestination: {
              width: 16,
              height: 16,
              
             },
             
             markerOrigin2: {
               width: 20,
               height:20,
              borderRadius:10
              },
   
       car:{
           paddingTop:0,
           width: 40,
           height: 20,
          },
   
          view2:{
           position:"absolute",
           top:10,
           right:12,
           backgroundColor:"white",
           height:40,
           width:180,
           borderRadius:20,
           justifyContent:"center",
           alignItems:"center",
           marginTop:2, 
           zIndex: 8
           
         },    
    
   view3:{ flexDirection:"row",
   alignItems:"center",
   paddingVertical:2,
   //borderRadius:20
   },
   
   view4:{
       position:"absolute",
       top:50,
       left:12,
       backgroundColor:"white",
       height:40,
       width:140,
       borderRadius:20,
       justifyContent:"center",
       alignItems:"center",
       marginTop:2, 
       zIndex: 8
       
     }, 
   
     location: {
       width: 20,
       height: 20,
       backgroundColor:"black",
       alignItems:"center",
       justifyContent:"center"
       
       }, 
       
   view9:{width:6,
     height:6,
     borderRadius:4,
     backgroundColor:"white"
   }     
})