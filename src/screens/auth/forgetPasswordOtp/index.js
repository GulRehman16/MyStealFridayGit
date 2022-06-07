import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  Image
} from 'react-native';
import { AppButton, Header } from '../../../components';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import App from '../../../../App';

const ForgetPasswordOtp = (props) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'#F8F8F8'} barStyle="dark-content" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.mainBody}>
          <View style={{ alignSelf: 'center', width: '100%' }}>
            <View style={styles.screenHeader}>
              <Image
                source={require('../../../assets/images/loginLogo.png')}
                style={{ width: 210, height: 55 }}
              />
            </View>
          </View>
          <View style={styles.HeaderText}>
            <Text style={{ fontSize: 16, color: '#707070', textAlign: 'center' }}>
              Please enter the 6 digits code sent to your registered email
              address ab***@gmail.com
            </Text>
          </View>
          <OTPInputView
            style={{ width: '80%', height: 100 }}
            pinCount={6}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
          <View
            style={{ width: 180, }}>
            <AppButton label="Next" text
              onPress={() => {
                props.navigation.navigate('CreateNewPassWord');
              }}

            />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgetPasswordOtp;

const styles = StyleSheet.create({
  screenHeader: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  mainBody: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderText: {
    width: '80%',
    height: 87,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderStyleBase: {
    width: 38,
    height: 37,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 38,
    height: 37,
    borderWidth: 1,
    elevation: 5,
    backgroundColor: 'white',
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
