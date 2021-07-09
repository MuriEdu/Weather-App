import React from 'react';
import { Text } from 'react-native';
import { useFonts, MavenPro_400Regular, MavenPro_900Black } from '@expo-google-fonts/maven-pro';
import AppLoading from 'expo-app-loading';
import { CityView } from '../styles';

export default function City() {

    let [fontsLoaded] = useFonts({
        MavenPro_400Regular,
    });
    
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
                    São Carlos
                </Text>
            </CityView>
        )

    }
}