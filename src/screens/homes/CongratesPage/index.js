import {Icon} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {Images} from '../../../constants';
import {Header, AppButton, Content} from '../../../components';
import LottieView from 'lottie-react-native';

const CongratesPage = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar />
        <ImageBackground source={Images.Background.bg} style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}>
            <View style={{marginTop: 50, width: '90%', alignSelf: 'center'}}>
              <Header
                leftIcon
                IconColor="#fff"
                leftIconProps={() => {
                  navigation.goBack();
                }}
              />
            </View>
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                marginVertical: 10,
              }}>
              <Text
                style={{
                  marginVertical: 5,
                  color: '#fff',
                  fontSize: 20,
                  marginTop: 10,
                  textAlign: 'center',
                }}>
                Thank You
              </Text>
              <View
                style={{
                  width: 88,
                  height: 88,
                  marginTop: 5,
                  alignSelf: 'center',
                }}>
                <LottieView
                  style={{width: 88, height: 88}}
                  source={require('../../../assets/Lottie/96409-check-animation.json')}
                  autoPlay
                  loop
                />
              </View>
              <Text
                style={{
                  marginVertical: 5,
                  color: '#fff',
                  fontSize: 18,
                  marginTop: 5,
                  textAlign: 'center',
                }}>
                Order Placed Successfully
              </Text>
              <View
                style={{
                  alignSelf: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: '#fff',
                }}>
                <Text
                  style={{
                    borderBottomWidth: 1,
                    width: '70%',
                    borderBottomColor: '#fff',
                    marginVertical: 5,
                    color: '#fff',
                    fontSize: 16,
                    marginTop: 10,
                    textAlign: 'center',
                  }}>
                  Order Information
                </Text>
              </View>
              <Content />
              <View style={{width: 214, alignSelf: 'center'}}>
                <AppButton
                  label="Continue Shopping"
                  text
                  onPress={() => {
                    navigation.navigate('home');
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default CongratesPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  mainBox: {
    marginTop: 30,
    width: '90%',
    height: 218,
    backgroundColor: 'white',
    borderRadius: 40,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  mainBody: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  noticeBox: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#ffff',
    elevation: 5,
    marginTop: 30,
    // alignItems: 'center',
  },
  ortext: {
    width: '100%',
    height: 65,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  loginBtn: {
    backgroundColor: 'red',
    width: '100%',
    alignSelf: 'center',
    height: 38,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
