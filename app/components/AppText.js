import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AppText = ({ children, style }) => {

    return (
        <Text style={[styles.text, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color:"#fff"
    }
})
export default AppText;