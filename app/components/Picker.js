import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colorTheme } from '../config/colors';

const PICKER_HEIGHT = 40;

const Picker = ({ onPress, open, placeholder, style }) => {

    const handlePressed = () => {
        onPress();
    }
    return (
        <TouchableOpacity
            activeOpacity={.5}
            onPress={handlePressed}
            style={[
                styles.view, style
            ]}
        >
            <Text style={styles.text}>{placeholder}</Text>
            {open &&
            <Image style={styles.image}
                source={require('../assets/images/drop_down_arrow_up.png')} />
            }
            {!open &&
            <Image style={styles.image}
                source={require('../assets/images/drop_down_arrow_down.png')} />
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 14,
        tintColor: '#fff',
        width: 14,
    },
    text: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
        margin: 10,
    },
    view: {
        alignItems: 'center',
        backgroundColor: '#1C9F7D',
        borderRadius: 5,
        flexDirection: 'row',
        height: PICKER_HEIGHT,
        justifyContent: 'space-around',
        width: '100%',
        zIndex: 1,
    },

})

export default Picker;
