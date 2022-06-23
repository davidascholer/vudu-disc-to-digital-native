import React from 'react';
import { Text } from 'react-native';

import netInfo from '../utility/netInfo';

export default function App({ styleSheet }) {

    // return <Text style={styleSheet}>Not Connected</Text>
    return netInfo() ? <></> : <Text style={styleSheet}>Not Connected</Text>
    
}
