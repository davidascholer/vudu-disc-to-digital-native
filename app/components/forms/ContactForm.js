import React, { useContext, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Yup from "yup";
import { Formik, Form } from 'formik';

import FormInput from './FormInput';
import FormTextArea from './FormTextArea';


export default function ContactForm({ handleSubmit, initMessage="" }) {

    const Schema = Yup.object().shape({
        name: Yup.string()
            .required()
            .min(1)
            .label("Name"),
        email: Yup.string()
            .required()
            .min(1)
            .email()
            .label("Email")
            .trim(),
        message: Yup.string()
            .required()
            .min(1)
            .label("Message"),
    });

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                message: initMessage,
            }}
            validationSchema={Schema}
            onSubmit={(values, { resetForm }) => {
                resetForm();
                handleSubmit(values.name, values.email, values.message);
            }}
        >
            {({ values, errors }) => (
                <Form style={styles.formContainer}>
                    <FormInput
                        name="name"
                        type="name"
                        value={values.name}
                        placeholder="Name"
                        error={errors.name}
                        styleContainer={styles.inputContainer}
                        styleError={styles.styleError}
                        styleField={styles.input}
                    />
                    <FormInput
                        name="email"
                        type="email"
                        value={values.email}
                        placeholder="Email"
                        error={errors.email}
                        styleContainer={styles.inputContainer}
                        styleError={styles.styleError}
                        styleField={styles.input}
                    />
                    <FormTextArea
                        name="message"
                        type="textarea"
                        value={values.message}
                        // placeholder={initMessage}
                        error={errors.message}
                        styleContainer={{ ...styles.inputContainer, ...styles.inputMessageContainer }}
                        styleError={styles.styleError}
                        styleField={styles.inputMessage}
                    />
                    <Button style={styles.buttonConfig} title={"send"} />
                </Form>
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    input: {
    },
    inputContainer: {
        width: '100%',
        maxWidth: 600
    },
    inputError: {

    },
    inputMessageContainer: {
        height: '20vh'
    },
    buttonConfig: {
        margin: '20px auto',
        maxWidth: 400,
        width: '60%',
    },
});