import React, { useContext, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import AppAlert from '../components/AppAlert';
import AppBackground from '../components/AppBackground';
import BackButton from '../components/BackButton';
import ContactForm from '../components/forms/ContactForm';

export default function ContactScreen({ navigation }) {

    //State vars.
    const [alertShown, setAlertShown] = useState(true);
    const [message, setMessage] = useState("");

    useEffect(() => {
        // if (location.state)
        //     setMessage(location.state.msg);
    }, []);

    const handleSubmit = async (name, email, mes) => {

        const send = await mailer(name, email, mes, window.location.hostname);
        if (send.data)
            if (send.data.success)
                showAlert();
    }

    const showAlert = () => {
        setAlertShown(true);
        setMessage("");

        setTimeout(() => {
            setAlertShown(false);
        }, 3000);
    };

    return (
        <AppBackground>
            {alertShown &&
                <AppAlert
                    message={"Message Sent"}
                    okText={"OK"}
                    hideCancelButton={true}
                    onPress={() => setAlertShown(false)}
                    setShown={setAlertShown} />
            }
            <BackButton navigation={navigation}></BackButton>
            <ContactForm></ContactForm>
        </AppBackground>
    );
}

const styles = StyleSheet.create({

});

//to do
//disclaimer (as well as main site)
//contact form design
//contact form hookup to backend
//in barcode screen, report problem (send to contact w message)