import React, { useEffect, useState } from 'react';
import { StyleSheet,Text, View } from 'react-native';

import AppBackground from '../components/AppBackground';
import BackButton from '../components/BackButton';

import fetchReceipts from '../controller/fetchReceipts';
import signInServices from '../controller/signInServices';

const ReceiptScreen = ({ navigation }) => {

    //Static constants
    const EMPTY_MOVIE_MESSAGE = "you haven't purchased any tokens yet";

    const [receipts, setReceipts] = useState([]);
    const [emptyMsg, setEmptyMsg] = useState(EMPTY_MOVIE_MESSAGE);

    useEffect(() => {
        getUserContent();
    }, []);

    const getUserContent = async () => {
        const user = await signInServices.getUser();
        if (user) {
            if (user.jwt) {
                getUserReceipts(user);
            }
        }
    }

    const getUserReceipts = async user => {

        const receipts = await fetchReceipts(user.appID);

        if (!receipts) {
            setEmptyMsg("There was an issue fetching your receipts. Please refresh the page.");
            return;
        }

        setReceipts(receipts);

    }

    const Receipt = ({ children }) => {
        const formattedDate = formatDate(children.created)
        const formattedAmount = (children.amount / 100).toFixed(2)

        function formatDate(date) {
            const a = new Date(date * 1000);
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const year = a.getFullYear();
            const month = months[a.getMonth()];
            const day = a.getDate();
            return (`${month} ${day}, ${year}`);
        }

        return (
            <>
                <View style={styles.receiptContainer}>
                    <Text style={styles.text}>Transaction id: {children.id}</Text>
                    <Text style={styles.text}>Amount: {formattedAmount}</Text>
                    <Text style={styles.text}>Date of purchase: {formattedDate} </Text>
                </View>
                <View style={styles.hr}></View>
            </>
        )
    };

    return (
        <AppBackground>
            <BackButton navigation={navigation} />

            {/*Map all of the movies rectrieved from API.*/}
            <View style={styles.container}>
                {receipts.length > 0 && receipts.map((receipt, index) => (
                    <Receipt key={index}>
                        {receipt}
                    </Receipt>
                ))}
                {receipts.length === 0 &&
                    <Text style={{ textAlign: 'center', color: '#fff' }}>{emptyMsg}</Text>
                }
            </View>

        </AppBackground>
    );
}

//styles
const styles = StyleSheet.create({
    backButton: {
        position: 'relative',
        marginRight: 'auto',
        left: 10,
        top: 10,
    },
    container: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%'
    },
    hr: {
        borderColor: '#aaa',
        borderBottomWidth:2,
        margin:'3%',
        width: '94%',
    },
    receiptContainer: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '5%',
        width: '100%'
    },
    text: {
        color: '#fff',
        marginTop: 8,
        marginBottom: 8,
    },
});

export default ReceiptScreen;