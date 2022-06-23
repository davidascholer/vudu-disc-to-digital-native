import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from "react-native";

const AppAlert = ({ style, title = "", message = "", okText, cancelText = "", onPress, setShown }) => {

  // const 
  return (
    <TouchableWithoutFeedback onPress={()=>setShown(false)}>
      <View style={[styles.container, style]}>
        <View style={styles.innerContainer}>
          <Text style={[styles.text, { fontSize: 22, fontWeight: '600' }]}>{title}</Text>
          <Text style={[styles.text]}>{message}</Text>
          <TouchableHighlight style={styles.button} onPress={onPress}>
            <Text style={[styles.text]}>{okText}</Text>
          </TouchableHighlight>
          {(cancelText !== "") &&
            <TouchableHighlight style={styles.button} onPress={()=>setShown(false)}>
              <Text style={[styles.text]}>{cancelText}</Text>
            </TouchableHighlight>
          }
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 2,
    margin: 10,
    padding: 5,

  },
  container: {
    backgroundColor: 'rgba(0,0,0,.8)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 10,
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    color: '#000',
  }
});

export default AppAlert;