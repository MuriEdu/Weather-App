import React from 'react';
import { Text } from 'react-native';
import { useFonts, MavenPro_400Regular, MavenPro_900Black } from '@expo-google-fonts/maven-pro';
import AppLoading from 'expo-app-loading';
import { CityView } from '../styles';

export default function City({ city, area }) {

    let [fontsLoaded] = useFonts({
        MavenPro_400Regular,
    });

    const verifyCity = () => {
        if (!city || !area) {
            return ''
        }
        else {
            return `${city}, ${area}`
        }
    }
    
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        return (
            <CityView>
                <Text
                    style={{
                        fontSize: 20,
                        fontFamily: 'MavenPro_400Regular',
                    }}
                > 
                    {verifyCity()}
                </Text>
            </CityView>
        )

    }
}