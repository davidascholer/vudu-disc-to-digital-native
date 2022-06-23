import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { StackActions } from '@react-navigation/native';

// import { useNavigate } from "react-router-dom";
import appColors from '../styles/appColors';

const BackButton = ({ navigation, style }) => {

    // let navigate = useNavigate();

    return (
        <View style={styles.container}>
            {/* <View style={{ ...styles.container, ...style }} onClick={() => navigate(-1, { replace: true })}> */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.dispatch(StackActions.pop(1))}>
                <View style={[styles.arrow, {
                    transform: [{ rotate: "45deg" }]
                }]} />
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    arrow: {
        border: 'solid black',
        borderLeftWidth: 3,
        borderBottomWidth: 3,
        height:15,
        width:15,
    },
    button: {
        alignItems:'center',
        backgroundColor: appColors.header,
        borderRadius: 6,
        display:'flex',
        justifyContent:'center',
        padding:20,
        textAlign: 'center',
        width: 50,
        height:50,
    },
    container: {
        margin:10,
        width:'100%',
    },
});

export default BackButton;