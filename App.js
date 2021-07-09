import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Copyright } from './src/styles';
import TopTitle from './src/components/TopTitle';
import CityInput from './src/components/CityInput';
import City from './src/components/City';
import Weather from './src/components/Weather';


export default function App() {

  return(
    <SafeAreaView>
      <TopTitle/>
      <City/>
      <CityInput/>
      <Weather/>
      <Copyright>created by @MuriEdu</Copyright>
    </SafeAreaView>
  )

}