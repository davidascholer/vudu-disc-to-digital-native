import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import AppText from './AppText';

const Banner = ({ text }) => {

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/images/green_banner.png')}
            />
            <Text style={styles.text}>{text}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'center',
        height:100,
        width: '100%',
    },
    image: {
        height:100,
        position:'absolute',
        resizeMode: 'contain',
        width: '100%',
    },
    text: {
        color:'#051D2C',
        fontSize:18,
        fontWeight:'500',
        position:'absolute',
        textAlign:'center',
    },
})
export default Banner;