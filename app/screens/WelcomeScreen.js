import React from 'react';
import { ImageBackground, StyleSheet, Image } from 'react-native';

function WelcomeScreen(props) {
    return (

            <ImageBackground
      style={styles.background}
      resizeMode="cover"
      source={require("../assets/bg.jpg")}>

      </ImageBackground>
    );
}
const styles = StyleSheet.create({
  background:{
    flex:1,
  },
});

export default WelcomeScreen;