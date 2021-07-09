import React from 'react';
import { View } from 'react-native';
import { useFonts, MavenPro_400Regular, MavenPro_700Bold } from '@expo-google-fonts/maven-pro';
import AppLoading from 'expo-app-loading';
import { Title } from '../styles';

export default function TopTitle() {

    let [fontsLoaded] = useFonts({
        MavenPro_400Regular,
        MavenPro_700Bold,
    });
    
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View>
                <Title  style={{fontFamily: 'MavenPro_400Regular'}} >
                Weather
                <Title  style={{fontFamily: 'MavenPro_700Bold'}} >Time</Title>
                </Title>
            </View>
    );
    }
}