import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text, Alert } from 'react-native';
import { Copyright } from './src/styles';
import { getCity, getCurrentConditions } from './src/server';
import TopTitle from './src/components/TopTitle';
import CityInput from './src/components/CityInput';
import City from './src/components/City';
import Weather from './src/components/Weather';


export default function App() {

  const [ city, setCity ] = useState('')
  const [ currentConditions, setCurrentConditions ] = useState(null)

  const updateAPI =  async (city) => {
    
    const cityDets = await getCity(city)
    const weather = await getCurrentConditions(cityDets.Key)

    return { weather }

  }

  const updateApp = data => {

    const getWeather = data.weather
    setCurrentConditions(getWeather);
    console.log(currentConditions);

  }

  const Search = (search) => {
    setCity(search)
    if (!search.trim()) {
      Alert.alert('Error', 'You do not search a valid city')
    }
    else{
      updateAPI(search.trim())
      .then( response => {updateApp(response)})
      .catch( error => {console.log(error)} )
    }
  }

  return(
    <SafeAreaView>
      <TopTitle/>
      <City city={city.trim()}/>
      <CityInput getSearch={Search}/>
      <Weather 
        weather={currentConditions}
      />
      <Copyright>created by @MuriEdu</Copyright>
    </SafeAreaView>
  )

}