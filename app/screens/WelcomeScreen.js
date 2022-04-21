import React from 'react';
import { ImageBackground } from 'react-native-web';

function WelcomeScreen(props) {
    return (
      <ImageBackground
      style={StyleSheet.background}
      source={require('../assets/bg.jpg')}
      >

      </ImageBackground>
    );
}
const styles = StyleSheet.create({
  background:{
    flex:1,
  }
})

export default WelcomeScreen;