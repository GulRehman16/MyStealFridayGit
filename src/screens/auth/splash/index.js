import React, { useEffect } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  Easing,
  TouchableHighlight,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { Images } from '../../../constants';

const Splash = ({ navigation }) => {
  let rotateValueHolder = new Animated.Value(0);

  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction());
  };

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    useEffect(() => {
      startImageRotateFunction();
      setTimeout(() => {
        navigation.replace('login');
      }, 1000);
    }, []),
    (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <ImageBackground source={Images.Background.bg} style={styles.container}>
          <Animated.Image
            style={{
              width: 224,
              height: 43,
              transform: [{ rotate: RotateData }],
            }}
            source={require('../../../assets/images/logo.png')}
          />
          {/* <TouchableHighlight
          onPress={startImageRotateFunction}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            Start Image Rotate Function
          </Text>
        </TouchableHighlight> */}
        </ImageBackground>
      </SafeAreaView>
    )
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 20,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    marginTop: 32,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
});
