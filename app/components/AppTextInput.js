import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

function AppTextInput({ icon, onFocus, style, ...otherProps }) {

  return (
    <View style={[styles.container,{backgroundColor:'white'},style ]}>
      {/* {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={appContext.colorTheme.medDark}
          style={styles.icon}
        />
      )} */}
      <TextInput
        onFocus={onFocus}
        placeholderTextColor={'blue'}
        style={[{width:'100%',textTransform:"lowercase",color:"blue"}]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    borderRadius: 25,
    flexDirection: "row",
    justifyContent:"flex-start",
    marginVertical: 10,
    padding: 15,
    width:"100%",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
