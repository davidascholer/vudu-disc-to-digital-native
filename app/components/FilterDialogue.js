import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { FILTER_LIST } from '../config/constants';

const FilterDialogue = ({ onPress, style }) => {

    const FilterText = ({ item, parent, textStyle }) => (
        <TouchableOpacity onPress={()=>onPress(item, parent)}>
            <Text style={[styles.text, textStyle]}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={[styles.container, style]}>
            {
                Object.keys(FILTER_LIST).map((category, index) => (
                    <View key={index} style={styles.view}>
                        <FilterText textStyle={styles.header} item={category}/>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                        >
                            {
                                FILTER_LIST[category].map((item, index) => (
                                    <FilterText key={item} item={item} parent={category}/>
                                ))
                            }
                        </ScrollView>
                    </View>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
        maxHeight: '30%',
        overflow: 'hidden',
    },
    header:{
        fontWeight: '700', 
        marginVertical: 10,
    },
    text: {
        color: '#fff',
        fontSize:15,
        marginVertical: 5,
        textAlign: 'center',
    },
    view: {
        width:'25%',
    },
})
export default FilterDialogue;
