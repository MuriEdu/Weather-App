import React from 'react';
import { View, Image } from 'react-native';
import { useFonts, JuliusSansOne_400Regular } from '@expo-google-fonts/julius-sans-one';
import AppLoading from 'expo-app-loading';
import { WeatherView, WeatherTxt, Temp } from '../styles';

export default function Weather({ weather }) {

    const getIcon = () => {

        if ( weather[0].WeatherIcon === (1 || 2 || 3 || 4 || 30) ) {
            return require('../images/WeatherIcons/sun.png')
        }
        if ( weather[0].WeatherIcon === (5 || 6) ) {
        return require('../images/WeatherIcons/cloudy.png')
        }
        if ( weather[0].WeatherIcon === (7 || 8 || 9 || 10 || 11 ||19 || 20 || 21 || 22 || 23) ) {
            return require('../images/WeatherIcons/cloud.png')
        }
        if ( weather[0].WeatherIcon === (12 || 13 || 18 || 39 || 40) ) {
            return require('../images/WeatherIcons/rain.png')
        }
        if ( weather[0].WeatherIcon === (14) ) {
            return require('../images/WeatherIcons/rainy-free.png')
        }
        if ( weather[0].WeatherIcon === (15 || 16 || 41 || 42 || 43 || 44) ) {
            return require('../images/WeatherIcons/thuderstorm.png')
        }
        if ( weather[0].WeatherIcon === (24 || 25 || 26) ) {
            return require('../images/WeatherIcons/hail.png')
        }
        if ( weather[0].WeatherIcon === (31) ) {
            return require('../images/WeatherIcons/cold.png')
        }
        if ( weather[0].WeatherIcon === (32) ) {
            return require('../images/WeatherIcons/windy.png')
        }
        if ( weather[0].WeatherIcon === (33 || 36) ) {
            return require('../images/WeatherIcons/moon.png')
        }
        else {
            return require('../images/WeatherIcons/half-moon.png')
        }
    }


    let [fontsLoaded] = useFonts({
        JuliusSansOne_400Regular,
    });
    
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        if (!weather) {
            return (<View
                style={{height: 282}}
            ></View>)
        }
        else {
            return (
                <WeatherView
                style={{ flexDirection: 'row' }}
                >
                <View>
                    <Temp
                        style={{fontFamily: 'JuliusSansOne_400Regular'}}
                        >
                            {Math.trunc(weather[0].Temperature.Metric.Value)}°
                        </Temp>
                    <WeatherTxt
                        style={{fontFamily: 'JuliusSansOne_400Regular'}}
                        >{weather[0].WeatherText}</WeatherTxt>
                </View>
                    <Image 
                        source={getIcon()} 
                        style={{
                            width: 120,
                            height: 120,
                            marginLeft: 190,
                            marginTop: 27,
                            position: 'absolute',
                        }}
                        />
            </WeatherView>
        )
    }
    }
}