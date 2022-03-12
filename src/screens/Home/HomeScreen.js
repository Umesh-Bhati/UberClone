import React, {useRef} from 'react';
import {ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Profile, PromotionHeader, Services, WhereTo} from '../../components/Home';
import {carsAround, filterData} from '../../global/data';
import { mapStyle } from '../../global/mapStyle';

export default function HomeScreen({navigation}) {
  const _map = useRef(1);
  return (
    <ScrollView 
    showsHorizontalScrollIndicator={false}
    bounces={false}
    contentContainerStyle={styles.container}>
     <Profile/>
      <PromotionHeader />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
        {filterData.map((item, index) => (
          <Services img={item.image} key={item.id} serviceName={item.name} navigationScreen={item.navigationScreenName} navigation={navigation}  />
        ))}
      </View>
      <WhereTo whereToPress={() => navigation.navigate('DestinationSearch')} />
    
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          width: '90%',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: '500',
            textAlign: 'left',
            alignSelf: 'flex-start',
            marginVertical: 30,
          }}>
          Around You
        </Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: "50%",
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <MapView
            ref={_map}
            provider={PROVIDER_GOOGLE}
            style={{
              width:"100%",
              height:"100%",
              borderRadius: 10
            }}
            customMapStyle={mapStyle}
            showsUserLocation={true}
            followsUserLocation={true}
            initialRegion={{
              ...carsAround[0],
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}>
            {carsAround.map((item, index) => (
              <MapView.Marker coordinate={item} key={index.toString()}>
                <Image
                  source={require('../../assets/carMarker.png')}
                  style={{
                    width: 28,
                    height: 14,
                  }}
                  resizeMode="cover"
                />
              </MapView.Marker>
            ))}
          </MapView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
