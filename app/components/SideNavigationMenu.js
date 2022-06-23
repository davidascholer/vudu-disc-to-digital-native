import React, { useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import SideNavigationContainer from './SideNavigationContainer';

import appColors from '../styles/appColors';

export default function SideNavigationMenu({ initialRender, navigation, shown }) {

    const [menuClosed, setMenuClosed] = useState(true);

    const animationValueFade = useRef(new Animated.Value(1)).current;
    const animationValueRotate = useRef(new Animated.Value(0)).current;
    const globalTimingValues = {
        duration: 250,
        easing: Easing.linear,
        useNativeDriver: true
    }

    const handleClick = () => {
        // setInitialRender(false);
        if (menuClosed)
            open();
        else
            close();
    };

    const open = () => {
        setMenuClosed(false);
        // Need to use parallel as we have 4 animations running.
        Animated.parallel([
            Animated.timing(animationValueRotate, {
                ...globalTimingValues,
                toValue: 1,
            }),
            Animated.timing(animationValueFade, {
                ...globalTimingValues,
                toValue: 0,
            }),
        ]).start();
    };
    const close = () => {
        setMenuClosed(true);
        // Fade, then rotate.
        // Still need to use parallel as we have 2 animations running on each animation timing.
        Animated.parallel([
            Animated.timing(animationValueRotate, {
                ...globalTimingValues,
                toValue: 0,
                // duration:globalTimingValues.duration/2
            }),
            Animated.timing(animationValueFade, {
                ...globalTimingValues,
                toValue: 1,
                // duration:globalTimingValues.duration/2
            }),
        ]).start();
    };

    return (
        <>
            <SideNavigationContainer menuClosed={menuClosed} navigation={navigation}/>
            <TouchableWithoutFeedback style={styles.container} onPressOut={() => handleClick()}>
            <View style={styles.container}>
                    {
                        !initialRender &&
                        <>
                            {shown &&
                                <>
                                    <View style={[styles.menuBar, styles.topBarAnimSelected]} />{/*className='top-bar-anim-selected' />*/}
                                    <View style={[styles.menuBar, styles.middleBarAnimSelected]} />{/*className='middle-bar-anim-selected' />*/}
                                    <View style={[styles.menuBar, styles.bottomBarAnimSelected]} />{/*className='bottom-bar-anim-selected' />*/}
                                </>
                            }
                            {!shown &&
                                <>
                                    <View style={styles.menuBar} />{/*className='top-bar-anim-deselected' />*/}
                                    <View style={styles.menuBar} />{/*className='middle-bar-anim-deselected' />*/}
                                    <View style={styles.menuBar} />{/*className='bottom-bar-anim-deselected' />*/}
                                </>
                            }
                        </>
                    }
                    {
                        initialRender &&
                        <>
                            <Animated.View style={[styles.menuBar, styles.topBarAnimSelected,
                            {
                                opacity: animationValueFade.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 1]
                                }),
                            },
                            ]} />{/*className='top-bar-deselected' />*/}
                            <Animated.View style={[styles.menuBar, styles.middleBarAnimSelected,
                            {
                                transform: [
                                    {
                                        rotate: animationValueRotate.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ["0deg", "45deg"]
                                        })
                                    },
                                ],

                            },
                            ]} />{/*className='middle-bar-deselected' />*/}
                            <Animated.View style={[styles.menuBar, styles.middleBarAnimSelected,
                            {
                                transform: [
                                    {
                                        rotate: animationValueRotate.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ["0deg", "-45deg"]
                                        })
                                    },
                                ],

                            },
                            ]} />{/*className='middle-bar-deselected' />*/}
                            <Animated.View style={[styles.menuBar, styles.bottomBarAnimSelected,
                            {
                                opacity: animationValueFade.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 1]
                                })
                            },
                            ]} />{/*className='bottom-bar-deselected' />*/}
                        </>
                    }
                </View>
            </TouchableWithoutFeedback>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        display: 'flex',
        height: 50,
        width: 50,
        zIndex: 1,
    },
    menuBar: {
        borderBottomColor: appColors.header,
        borderBottomStyle: 'solid',
        borderBottomWidth: 3,
        borderRadius: 10,
        left: '10%',
        position: 'absolute',
        width: '80%',
    },
    topBarAnimSelected: {
        top: '25%',
    },
    middleBarAnimSelected: {
        top: '50%',
    },
    bottomBarAnimSelected: {
        top: '75%',
    },
})