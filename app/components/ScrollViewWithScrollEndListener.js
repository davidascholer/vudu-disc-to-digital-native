import React, { useRef, useState } from 'react';
import { ScrollView, Text } from 'react-native';


const ScrollViewWithScrollEndListener = ({ children, onScrollBeg, onScrollEnd, scrollRef, style }) => {
    const [isRunning, setIsRunning] = useState(false);
    //layoutMeasurement.height = height of screen
    //contentOffset.y = scroll position relative to top of screen
    //contentSize.height = total size of scroll container
    const isAtBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height + 50;
    };

    const isAtTop = ({ layoutMeasurement, contentOffset, contentSize }) => {
        return contentOffset.y <= -50;
    };

    return (
        <ScrollView
            ref={scrollRef}
            style={style}
            onScroll={({ nativeEvent }) => {
                // console.log('lm: '+nativeEvent.layoutMeasurement.height);
                // console.log("lm+co: "+(nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y))
                // console.log('co: '+nativeEvent.contentOffset.y);
                // console.log('cs: '+nativeEvent.contentSize.height);
                if (isAtBottom(nativeEvent)) {
                    // setTimeout(() => {
                        if (isAtBottom(nativeEvent)) {
                            if (!isRunning) {
                                onScrollEnd();
                                setIsRunning(true);
                            }
                            setTimeout(() => {
                                setIsRunning(false);
                            }, 2000)
                        }
                    // }, 500);
                }
                if (isAtTop(nativeEvent)) {
                    // setTimeout(() => {
                        if (isAtTop(nativeEvent)) {
                            if (!isRunning) {
                                onScrollBeg();
                                setIsRunning(true);
                            }
                            setTimeout(() => {
                                setIsRunning(false);
                            }, 2000)
                        }
                    // }, 500);
                }
            }}
            scrollEventThrottle={250}
        >
            {children}
        </ScrollView>
    );
}

export default ScrollViewWithScrollEndListener;