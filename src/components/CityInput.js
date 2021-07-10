import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { InputCity, SearchButton } from '../styles';

export default function CityInput({ getSearch }) {

    const [ search, setSearch ] = useState('')

    return (
        <View
            style={{ flexDirection: 'row'}}
        >
            <InputCity
                value={search}
                onChangeText={(text)=>{
                    setSearch(text)
                }}
            />
            <SearchButton
                onPress={()=>{getSearch(search)}}
            >
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


