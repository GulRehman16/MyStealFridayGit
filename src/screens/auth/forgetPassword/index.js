import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FormInput, AppButton, Header } from '../../../components';
import { Themes, Images } from './../../../constants';

const ForgetPassword = props => {
  const [visible, setVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const [state, setState] = useState({
    focus: false,
    secureText: true,
  });

  // const showToast = text => {
  //   Toast.show({
  //     type: 'error',
  //     text2: text,
  //     visibilityTime: 4000,
  //     topOffset: 15,
  //   });
  // };
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'#F8F8F8'} barStyle="dark-content" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.mainBody}>
          <View style={{ marginTop: 35 }}>
            <Header
              headerText1
              leftIcon
              screenName1
              screenText1={'Forget Password'}
              marginLeft={33}
              leftIconProps={() => {
                props.navigation.goBack();
              }}
            />
          </View>

          <View style={styles.HeaderText}>
            <Text style={{ fontSize: 19, color: '#191919B8' }}>
              Enter Your Registered Email To Get The Password Reset Code
            </Text>
          </View>
          <View style={{ marginTop: 40 }}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 20,
                color: Themes.textColors.blackText,
                fontWeight: '400',
              }}>
              Email Address
            </Text>
            <View
              style={{
                elevation: 5,
                backgroundColor: 'white',
                marginVertical: 20,
                borderColor: state.focus === 'email' ? '#CD1C1B' : null,
                borderWidth: state.focus === 'email' ? 1 : 0,
                borderRadius: 20,
              }}>
              <FormInput
                autoCapitalize="none"
                value={userInfo.email}
                onChangeText={value => setUserInfo({ ...userInfo, email: value })}
                iconL
                iconLName="mail"
                iconLType="AntDesign"
                placeHolder="example@gmail.com"
                onFocus={() => setState({ ...state, focus: 'email' })}
                onBlur={() => setState({ ...state, focus: '' })}
              />
            </View>

            <View
              style={{
                width: '60%',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  paddingVertical: 20,
                  width: '100%',
                  alignItems: 'center',
                }}>
                <AppButton

                  btnWidth={200}
                  label="Continue"
                  text
                  onPress={() => {
                    props.navigation.navigate('forgetPasswordOtp');
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  mainBody: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: 30,
  },
  HeaderText: {
    width: '80%',
    marginTop: 40,
    height: 47,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn: {
    width: '100%',
    alignSelf: 'center',
    height: 57,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
