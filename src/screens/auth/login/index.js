import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  TextInput,
  BackHandler,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FormInput, AppButton, CheckBox, Alert} from '../../../components';

const Login = ({navigation, route}) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    focus: '',
    secureText: true,
  });

  const isCheck = route?.params?.wrong;

  useEffect(() => {
    console.log(isCheck);
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [isCheck]);

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
        <View style={styles.screenBody}>
          <View style={styles.inputContainer}>
            <View style={styles.screenHeader2}>
              <Text style={styles.headingText}>Login</Text>
            </View>
            <View style={{marginTop: 40, width: '100%'}}>
              <View
                style={{
                  elevation: 5,
                  backgroundColor: 'white',
                  marginVertical: 8,
                  borderColor: state.focus === 'email' ? '#CD1C1B' : null,
                  borderWidth: state.focus === 'email' ? 1 : 0,
                  borderRadius: 20,
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
                  placeHolder="Password"
                  onFocus={() => setState({...state, focus: 'password'})}
                  onBlur={() => setState({...state, focus: ''})}
                />
              </View>
              <View
                style={{
                  marginTop: 20,
                  marginTop: 5,
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <CheckBox
                    alignItem={'flex-start'}
                    onPress={() => setState({checked: !state.checked})}
                    checked={state.checked}
                    text={'Remember'}
                  />
                </View>
                <TouchableOpacity
                  style={{marginTop: 5}}
                  onPress={() => {
                    navigation.navigate('forgetPassword');
                  }}>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  paddingVertical: 20,
                  width: '100%',
                  alignItems: 'center',
                }}>
                <AppButton
                  btnWidth={180}
                  label="Login"
                  text
                  onPress={() => {
                    // navigation.replace('MyDrawer', {
                    //   screen: 'Home',
                    //   params: {value: 3},
                    // });

                    navigation.replace('MyDrawer', {screen: 'Home'});
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.orText}>OR</Text>
        <View
          style={{
            height: 40,
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black'}}>Don't have an account? </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('signup')}>
            <Text style={{color: '#CD1C1B', fontWeight: 'bold'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 40,
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black'}}>Having Trouble Logging In? </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('ContactUs');
            }}>
            <Text style={{color: '#CD1C1B', fontWeight: 'bold'}}>
              Contact Us
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },

  screenHeader: {
    width: '100%',
    paddingTop: 60,
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
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  orText: {
    fontSize: 19,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
    opacity: 0.5,
  },

  screenBody: {
    width: '90%',
    alignSelf: 'center',
  },

  inputContainer: {
    width: '100%',
    // height: 300,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
