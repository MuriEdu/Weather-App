import React from 'react';
import { View, Image } from 'react-native';
import { useFonts, JuliusSansOne_400Regular } from '@expo-google-fonts/julius-sans-one';
import AppLoading from 'expo-app-loading';
import { WeatherView, WeatherTxt, Temp } from '../styles';

export default function Weather() {

    let [fontsLoaded] = useFonts({
        JuliusSansOne_400Regular,
    });
    
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        return (
            <WeatherView
                style={{ flexDirection: 'row' }}
            >
                <View>
                    <Temp
                        style={{fontFamily: 'JuliusSansOne_400Regular'}}
                        >25°</Temp>
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