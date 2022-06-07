import {Icon} from 'native-base';
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FormInput, AppButton, CheckBox} from '../../../components';

import {Images} from '../../../constants';

const SignUp = props => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    phoneNo: '',
    email: '',
    password: '',
    confirmPassword: '',
    focus: '',
    secureText: true,
    secureText2: true,
  });

  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'#F8F8F8'} barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.screenHeader}>
          <Image
            source={require('../../../assets/images/loginLogo.png')}
            style={{width: 200, height: 51}}
          />
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.screenBody}>
            <View style={styles.screenHeader2}>
              <Text style={styles.headingText}>Sign Up</Text>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View
              style={{
                elevation: 5,
                backgroundColor: 'white',
                marginVertical: 8,
                borderColor: state.focus === 'firstName' ? '#CD1C1B' : null,
                borderWidth: state.focus === 'firstName' ? 1 : 0,
                borderRadius: 20,
                width: '100%',
              }}>
              <FormInput
                value={state.firstName}
                onChangeText={value => setState({...state, firstName: value})}
                iconL
                iconLName="user"
                iconLType="Feather"
                placeHolder="First Name"
                onFocus={() => setState({...state, focus: 'firstName'})}
                onBlur={() => setState({...state, focus: ''})}
              />
            </View>

            <View
              style={{
                elevation: 5,
                backgroundColor: 'white',
                marginVertical: 8,
                borderColor: state.focus === 'lastName' ? '#CD1C1B' : null,
                borderWidth: state.focus === 'lastName' ? 1 : 0,
                borderRadius: 20,
                width: '100%',
              }}>
              <FormInput
                value={state.lastName}
                onChangeText={value => setState({...state, lastName: value})}
                iconL
                iconLName="user"
                iconLType="Feather"
                placeHolder="Last Name"
                onFocus={() => setState({...state, focus: 'lastName'})}
                onBlur={() => setState({...state, focus: ''})}
              />
            </View>
            <View
              style={{
                elevation: 5,
                backgroundColor: 'white',
                marginVertical: 8,
                borderColor: state.focus === 'phoneNo' ? '#CD1C1B' : null,
                borderWidth: state.focus === 'phoneNo' ? 1 : 0,
                borderRadius: 20,
                width: '100%',
              }}>
              <FormInput
                value={state.phoneNo}
                onChangeText={value => setState({...state, phoneNo: value})}
                iconL
                iconLName="phone"
                iconLType="Feather"
                placeHolder="Phone Number"
                keyboardType={'numeric'}
                onFocus={() => setState({...state, focus: 'phoneNo'})}
                onBlur={() => setState({...state, focus: ''})}
              />
            </View>
            <View
              style={{
                elevation: 5,
                backgroundColor: 'white',
                marginVertical: 8,
                borderColor: state.focus === 'email' ? '#CD1C1B' : null,
                borderWidth: state.focus === 'email' ? 1 : 0,
                borderRadius: 20,
                width: '100%',
              }}>
              <FormInput
                value={state.email}
                onChangeText={value => setState({...state, email: value})}
                iconL
                iconLName="mail"
                iconLType="AntDesign"
                placeHolder="Email Address"
                onFocus={() => setState({...state, focus: 'email'})}
                onBlur={() => setState({...state, focus: ''})}
              />
            </View>
            <View
              style={{
                elevation: 5,
                backgroundColor: 'white',
                marginVertical: 8,
                borderColor: state.focus === 'password' ? '#CD1C1B' : null,
                borderWidth: state.focus === 'password' ? 1 : 0,
                borderRadius: 20,
                width: '100%',
              }}>
              <FormInput
                value={state.password}
                onChangeText={value => setState({...state, password: value})}
                iconL
                secureText={state.secureText}
                iconLName="lock"
                iconLType="Feather"
                iconR
                iconRName={state.secureText ? 'eye-with-line' : 'eye'}
                iconRType="Entypo"
                onPressR={() =>
                  setState({...state, secureText: !state.secureText})
                }
                placeHolder="New Password"
                onFocus={() => setState({...state, focus: 'password'})}
                onBlur={() => setState({...state, focus: ''})}
              />
            </View>
            <View
              style={{
                elevation: 5,
                backgroundColor: 'white',
                marginVertical: 8,
                borderColor:
                  state.focus === 'confirmPassword' ? '#CD1C1B' : null,
                borderWidth: state.focus === 'confirmPassword' ? 1 : 0,
                borderRadius: 20,
                width: '100%',
              }}>
              <FormInput
                value={state.confirmPassword}
                onChangeText={value =>
                  setState({...state, confirmPassword: value})
                }
                iconL
                secureText={state.secureText2}
                iconLName="lock"
                iconLType="Feather"
                iconR
                iconRName={state.secureText2 ? 'eye-with-line' : 'eye'}
                iconRType="Entypo"
                onPressR={() =>
                  setState({...state, secureText2: !state.secureText2})
                }
                placeHolder="Confirm Password"
                onFocus={() => setState({...state, focus: 'confirmPassword'})}
                onBlur={() => setState({...state, focus: ''})}
              />
            </View>

            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View>
                <CheckBox
                  alignItem={'flex-start'}
                  onPress={() => setState({checked: !state.checked})}
                  checked={state.checked}
                />
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: 'black'}}>I agree with</Text>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('Homes', {
                      screen: 'PrivacyPolocy',
                    });
                  }}
                  activeOpacity={0.7}>
                  <Text style={styles.termsPrivacy}>Terms of Services</Text>
                </TouchableOpacity>
                <Text style={{color: 'black'}}> &</Text>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('Homes', {
                      screen: 'PrivacyPolocy',
                    });
                  }}
                  activeOpacity={0.7}>
                  <Text style={styles.termsPrivacy}>Privacy Policy</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginTop: 15}}>
              <Text style={[styles.termsPrivacy, {fontSize: 15}]}>
                Subscription Charges $19.99
              </Text>
            </View>

            <View
              style={{
                paddingVertical: 20,
                width: '100%',
                alignItems: 'center',
              }}>
              <AppButton
                btnWidth={180}
                text
                label="Proceed To Pay"
                onPress={() => {
                  props.navigation.navigate('Homes', {screen: 'PaymentMethod'});
                }}
              />
            </View>
          </View>
          <View style={styles.alreadyAccount}>
            <Text style={{color: 'black'}}>Already have an account? </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => props.navigation.navigate('login')}>
              <Text style={{color: '#CD1C1B', fontWeight: 'bold'}}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.havingTrouble}>
            <Text style={{color: 'black'}}>Having Trouble Signing Up?</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                props.navigation.navigate('Homes', {screen: 'ContactUs'});
              }}>
              <Text style={{color: '#CD1C1B', fontWeight: 'bold'}}>
                Contact Us
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  mainContainer: {width: '90%', alignSelf: 'center', paddingBottom: 50},

  screenHeader: {
    width: '90%',
    height: 120,
    paddingTop: 30,
    paddingBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenHeader2: {
    width: '90%',

    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 0.5,
  },

  screenBody: {
    width: '90%',
    alignSelf: 'center',
  },

  profileImageContainer: {
    width: 120,
    height: 120,
    backgroundColor: 'red',
    alignSelf: 'center',
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    overflow: 'hidden',
  },

  uploadButton: {
    width: 25,
    height: 25,
    position: 'absolute',
    bottom: 6,
    right: 6,
    borderRadius: 100,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  inputContainer: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsPrivacy: {
    color: '#CD1C1B',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  alreadyAccount: {
    height: 40,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  havingTrouble: {
    height: 40,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
