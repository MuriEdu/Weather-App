import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { Copyright } from './src/styles';
import { getCity, code } from './src/server';
import TopTitle from './src/components/TopTitle';
import CityInput from './src/components/CityInput';
import City from './src/components/City';
import Weather from './src/components/Weather';


export default function App() {

  const [ city, setCity ] = useState('')
  const [ code, setCode ] = useState('')

  const Search = (search) => {
    setCity(search)
    getCity(city)
  }

  return(
    <SafeAreaView>
      <TopTitle/>
      <City city={city}/>
      <CityInput getSearch={Search}/>
      <Weather city={city}/>
      <Copyright>created by @MuriEdu</Copyright>
    </SafeAreaView>
  )

}