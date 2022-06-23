import AsyncStorage from '@react-native-async-storage/async-storage';
import { clear } from 'react-native/Libraries/LogBox/Data/LogBoxData';

const storeDataObject = async (value) => {
    try {
        await AsyncStorage.setItem('@user_data', JSON.stringify(value));
    } catch (e) {
        // saving error
        console.log('could not save storage data',e)
        return {error:'could not save storage data'};
    }

}

const getDataObject = async () => {
    try {
        const data = await AsyncStorage.getItem('@user_data');
        return JSON.parse(data);
    } catch (e) {
        // error reading value
        console.error(e);
        return { error: "Failed to get data from storage." }
    }
}

const removeDataObject = async () => {
    try {
        await AsyncStorage.removeItem('@user_data');
    } catch (e) {
        console.error('could not remove storage data',e);
    }
}

const incrementAccounts = async () => {
    try {
        const accountQuanity = await getAccountQuantity();
        if (accountQuanity)
            AsyncStorage.setItem('@user_accounts', JSON.stringify({ creations: accountQuanity + 1 }));
        else
            setAccountQuantity();
    } catch (e) {
        // error reading value
        // do nothing. user just gets an extra account to add.
    }
}

const setAccountQuantity = async () => {
    try {
        AsyncStorage.setItem('@user_accounts', JSON.stringify({ creations: 1 }));
    } catch (e) {
        // error reading value
        // do nothing. user just gets an extra account to add.
    }
}

const getAccountQuantity = async () => {
    try {
        const data = await AsyncStorage.getItem('@user_accounts');
        if (data) {
            const parsedData = JSON.parse(data);
            return parsedData.creations;
        } else {
            return null;
        }
    } catch (e) {
        // error reading value
        return { error: e }
    }
}

const clearAll = async () => {
    AsyncStorage.clear();
}

module.exports = {
    storeDataObject,
    getDataObject,
    removeDataObject,
    incrementAccounts,
    getAccountQuantity,
}