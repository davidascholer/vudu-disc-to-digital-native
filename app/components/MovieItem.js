import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function MovieItem({ movie, onPress, }) {

    const { format, genres, image, ratings, title, year } = movie;

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.textContainer}>
                <View style={[styles.horizontalView,styles.titleContainer]}>
                    <Text style={styles.text}>{title}</Text>
                </View>
                <View style={styles.horizontalView}>
                    <Text style={styles.text}>{year}</Text>
                    <Text style={styles.text}>{ratings}</Text>
                    <Text style={styles.text}>{format}</Text>
                </View>
                <View style={styles.horizontalView}>
                    <Text style={styles.text}>{genres}</Text>
                </View>
            </View>
            <View style={styles.border} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    border: {
        borderBottomWidth: 1,
        borderColor: '#007aff',
    },
    container: {
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        width: '100%',
    },
    horizontalView: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical:10,
    },
    image: {
        maxHeight:200,
        resizeMode: 'contain',
        width: '20%',
    },
    text: {
        color: '#fff',
        flex: 1,
        flexWrap: 'wrap',
        padding: 5,
        textAlign: "center",
        // width:'100%',
    },
    textContainer: {
        flex: 1,
        padding: 10,
    },
    titleContainer: {
        flex: 2,
        flexWrap: 'wrap',
    },
})
export default MovieItem;
