import React from 'react';
import { View, Image } from 'react-native';
import { useFonts, JuliusSansOne_400Regular } from '@expo-google-fonts/julius-sans-one';
import AppLoading from 'expo-app-loading';
import { WeatherView, WeatherTxt, Temp } from '../styles';

export default function Weather({ weather }) {

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
                        >SUN</WeatherTxt>
                </View>
                <Image 
                    source={require('../images/sun.png')} 
                    style={{
                        width: 120,
                        height: 120,
                        marginTop: 69,
                    }}
                    />
            </WeatherView>
        )
    }

    }
}