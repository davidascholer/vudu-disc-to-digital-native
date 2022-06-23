import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import AppText from './AppText';
import Banner from './Banner';

const PurchaseItem = ({ clicked, description, price, style, title }) => {

    return (
        <TouchableOpacity style={[styles.box, style]} onPress={clicked}>
            <Banner text={title}/>
            <AppText style={styles.text}>{description}</AppText>
            <AppText style={styles.text}>{price}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor:'#051d2c',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#007777',
        padding: 10,
        marginHorizontal: 30,
        marginVertical: 10,
    },
    image: {
        resizeMode:'contain',
        width:'100%',
    },
    text:{
        marginBottom:10,
    }
})
export default PurchaseItem;