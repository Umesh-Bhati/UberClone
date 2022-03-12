import React, {useState} from 'react';
import {View, Dimensions, Alert} from 'react-native';
import UberTypes from '../../components/UberTypes';

import {useRoute, useNavigation} from '@react-navigation/native';
import MapComponent from '../../components/MapComponent';

const SearchResults = props => {
  const typeState = useState(null);

  const route = useRoute();
  const navigation = useNavigation();

  const {originPlace, destinationPlace} = route.params;

  const originLoc = {
    latitude: originPlace.details.geometry.location.lat,
    longitude: originPlace.details.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destinationPlace.details.geometry.location.lat,
    longitude: destinationPlace.details.geometry.location.lng,
  };

  const onSubmit = () => {
    Alert.alert('Hurraay', 'Your Ride hase been booked', [
      {text: 'Go to Home', onPress: () => navigation.navigate('HomeScreen')},
    ]);
  };

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <MapComponent Origin={originLoc} Destination={destinationLoc} />
      </View>

      <View style={{height: 400}}>
        <UberTypes typeState={typeState} onSubmit={onSubmit} />
      </View>
    </View>
  );
};

export default SearchResults;
