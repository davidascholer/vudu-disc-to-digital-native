import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ActiveFiltersBar = ({ genre, format, rating, year, onPress }) => {

    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.header]}>Filters</Text>
            <View style={styles.innerContainer}>
                <TouchableOpacity onPress={()=>onPress({genre})} style={styles.item}>
                    <Text style={styles.text}>{genre}</Text>
                    {genre !== "" &&
                        <Image style={styles.image} source={require('../assets/images/cancel.png')} />
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>onPress({format})} style={styles.item}>
                    <Text style={styles.text}>{format}</Text>
                    {format !== "" &&
                        <Image style={styles.image} source={require('../assets/images/cancel.png')} />
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>onPress({rating})} style={styles.item}>
                    <Text style={styles.text}>{rating}</Text>
                    {rating !== "" &&
                        <Image style={styles.image} source={require('../assets/images/cancel.png')} />
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>onPress({year})} style={styles.item}>
                    <Text style={styles.text}>{year}</Text>
                    {year !== "" &&
                        <Image style={styles.image} source={require('../assets/images/cancel.png')} />
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        width:'100%',
    },
    header: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 15,
        marginVertical: 5,
    },
    image: {
        height: 15,
        margin: 5,
        tintColor: '#fff',
        width: 15
    },
    innerContainer: {
        flexDirection: 'row',
        marginHorizontal:5,
    },
    item: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'center',
        width:'25%',
    },
    text: {
        color: '#fff',
        fontSize: 15,
        marginVertical: 5,
        textAlign: 'center',
    }

})
export default ActiveFiltersBar;
