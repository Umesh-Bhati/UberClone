import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  PackegeDelivery,
  FoodService,
  InterCityService,
  RideService,
  HomeScreen
} from '../screens/Home';
import DestinationSearch from '../screens/DestinestionScreen';
import SearchResults from '../screens/SearchResult';
import {withNetwork } from "react-native-network-toast";

const Home = createNativeStackNavigator();

 function RootNavigator() {
  return (
    <NavigationContainer>
      <Home.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Home.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
       
        <Home.Screen
          name="DestinationSearch"
          component={DestinationSearch}
        />
        <Home.Screen
          name="SearchResults"
          component={SearchResults}
        />
        <Home.Screen name="PackegeDelivery" component={PackegeDelivery} />
        <Home.Screen name="FoodService" component={FoodService} />
        <Home.Screen name="RideService" component={RideService} />
        <Home.Screen name="InterCityService" component={InterCityService} />
      </Home.Navigator>
    </NavigationContainer>
  );
}

export default withNetwork({positionOffset: 30})(RootNavigator)