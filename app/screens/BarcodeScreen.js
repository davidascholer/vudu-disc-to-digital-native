/*
    Barcodes 
*/

import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackActions } from '@react-navigation/native';

import AppBackground from '../components/AppBackground';
import BackButton from '../components/BackButton';

const barcodeCodes = {
    "quietZone": [0, 0, 0, 0, 0, 0, 0, 0, 0],
    "guard": [1, 0, 1],
    "middle": [0, 1, 0, 1, 0],
    "0": [0, 0, 0, 1, 1, 0, 1],
    "1": [0, 0, 1, 1, 0, 0, 1],
    "2": [0, 0, 1, 0, 0, 1, 1],
    "3": [0, 1, 1, 1, 1, 0, 1],
    "4": [0, 1, 0, 0, 0, 1, 1],
    "5": [0, 1, 1, 0, 0, 0, 1],
    "6": [0, 1, 0, 1, 1, 1, 1],
    "7": [0, 1, 1, 1, 0, 1, 1],
    "8": [0, 1, 1, 0, 1, 1, 1],
    "9": [0, 0, 0, 1, 0, 1, 1],
}

const BarcodeScreen = ({ navigation, route }) => {
    const [barcodeArray, setBarcodeArray] = useState([]);

    const incomingData = route.params;
    const { title, upc : barcode } = incomingData;

    useEffect(() => {
        propagate();
    }, [])

    const propagate = async () => {
        const generatedBarcodeArray = await generateBarcode(barcode);
        await setBarcodeArray(generatedBarcodeArray);

    };

    const Bar = ({ background }) => {
        return (
            <View
                style={{
                    backgroundColor: background,
                    width: 3,
                    height: 200
                }}
            />
        )
    }

    const generateBarcode = code => {

        console.log('generating barcode');

        const barcodeArray = code.split("");

        if (barcodeArray.length !== 12)
            return barcodeCodes["guard"];

        const firstHalf = [
            ...barcodeCodes[barcodeArray[0]],
            ...barcodeCodes[barcodeArray[1]],
            ...barcodeCodes[barcodeArray[2]],
            ...barcodeCodes[barcodeArray[3]],
            ...barcodeCodes[barcodeArray[4]],
            ...barcodeCodes[barcodeArray[5]]
        ];

        const reversedBarcodeList1 = notGateFromString(barcodeCodes[barcodeArray[6]]);
        const reversedBarcodeList2 = notGateFromString(barcodeCodes[barcodeArray[7]]);
        const reversedBarcodeList3 = notGateFromString(barcodeCodes[barcodeArray[8]]);
        const reversedBarcodeList4 = notGateFromString(barcodeCodes[barcodeArray[9]]);
        const reversedBarcodeList5 = notGateFromString(barcodeCodes[barcodeArray[10]]);
        const reversedBarcodeList6 = notGateFromString(barcodeCodes[barcodeArray[11]]);

        const secondHalf = [
            ...reversedBarcodeList1,
            ...reversedBarcodeList2,
            ...reversedBarcodeList3,
            ...reversedBarcodeList4,
            ...reversedBarcodeList5,
            ...reversedBarcodeList6,
        ];

        function notGateFromString(c) {
            console.log(c);
            // return [];
            return c.map(bar => {
                if (bar === 0)
                    return 1
                if (bar === 1)
                    return 0;
            })
        }

        return [
            ...barcodeCodes["guard"],
            ...firstHalf,
            ...barcodeCodes["middle"],
            ...secondHalf,
            ...barcodeCodes["guard"]
        ];
    }

    return (
        <AppBackground >
            <BackButton navigation={navigation}/>
            {/* https://images.barcodelookup.com/194/1947319-1.jpg */}
            <View style={[styles.container]}>
                <Text style={styles.text}>{title}</Text>
                <View style={styles.barcodeContainer}>
                    {barcodeArray.map((bar, index) => {
                        if (bar === 0) {
                            return (<Bar key={index} background='white' />)
                        }
                        if (bar === 1) {
                            return (<Bar key={index} background='black' />)
                        }
                    }
                    )}
                </View>
            </View>
        </AppBackground>
    );
}

const styles = StyleSheet.create({
    button: {

    },
    barcodeContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent:'center',
        paddingVertical:50,
        width:'100%',
    },
    container: {
        alignItems: 'center',
        justifyContent:'center',
        flex: 1,
    },
    text:{
        color:'white',
        margin:50,
        textAlign:'center',
    }
})

export default BarcodeScreen;