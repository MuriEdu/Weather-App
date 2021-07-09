import React from 'react';
import { Text, View, Image } from 'react-native';
import { InputCity, SearchButton } from '../styles';

export default function CityInput() {

    return (
        <View
            style={{ flexDirection: 'row'}}
        >
            <InputCity/>
            <SearchButton>
                <Image 
                    style={{
                        width: 25,
                        height: 25,
                    }}
                    source={require('../images/lupa.png')}
                 />
            </SearchButton>
        </View>
    )

}


