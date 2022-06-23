import React, { useState, useCallback } from "react";
import { Alert, Button, Dimensions, StyleSheet, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

import AppBackground from "../components/AppBackground";
import BackButton from "../components/BackButton";

  const windowWidth = Dimensions.get('window').width;
  //Get the YouTube ratio of 16/9
  const videoHeight = parseInt(windowWidth,10) * 9/16;

const HowItWorksScreen = ({navigation}) => {

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

    return (
        <AppBackground>
            <BackButton navigation={navigation} />
            <View style={styles.youtubeContainer}>
                <YoutubePlayer
                    height={videoHeight}
                    play={playing}
                    videoId={"YBjQ-HWff6A"}
                    onChangeState={onStateChange}
                />
                {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
            </View>
        </AppBackground>
    )
}

export default HowItWorksScreen;

const styles = StyleSheet.create({
    youtubeContainer:{
        marginTop:videoHeight/2,
        padding:10,
    }
})