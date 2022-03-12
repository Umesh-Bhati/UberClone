import React, {useEffect} from 'react';
import SplaseScreen from "react-native-splash-screen"
import Portfolio from './src/components/Portfolio';
import RootNavigator from './src/navigations/RootNavigator';

const App = () => {

  useEffect(()=>{
    SplaseScreen.hide()
  }, [])

  return (
  <>
  <Portfolio/>
  <RootNavigator/>
  </>
  );
};

export default App;
