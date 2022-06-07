import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../../../constants';
import {AppButton, FormInput, Header, Overlays} from '../../../components';

import {Icon, Item} from 'native-base';

const ContactUs = props => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    LastName: '',
    email: '',
    messege: '',
  });
  const [state, setState] = useState({
    focus: false,
    secureText: true,
    secureText2: true,
    checked: false,
    checked2: false,
  });
  const [visible, setVisible] = useState(false);
  const isRoute = props?.route?.params?.value;
  const backScreen = props?.route?.params?.backScreen;
  useEffect(() => {
    console.log(isRoute);
    const backAction = () => {
      if (backScreen) {
        props.navigation.navigate('MyTabs', {screen: backScreen});
      } else {
        props.navigation.goBack();
      }

      return true;
    };
    let backHandler;
    props.navigation.addListener('focus', () => {
      backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
    });

    props.navigation.addListener('blur', () => {
      if (backHandler) {
        backHandler.remove();
      }
    });
  }, []);

  return (
    <>
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar backgroundColor={'white'} barStyle="dark-content" />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{marginTop: 10}}>
            <View style={styles.mainBody}>
              <View style={{marginTop: 5}}>
                <Header
                  headerText1
                  txtwidth={120}
                  leftIcon
                  leftIconProps={() => {
                    props.navigation.goBack();
                  }}
                />
                <View style={{}}>
                  <Text
                    style={{textAlign: 'center', fontSize: 22, color: '#000'}}>
                    Contact Us
                  </Text>
                </View>
              </View>
              <View style={styles.noticeBox}>
                <View style={{height: 50, marginTop: 10}}>
                  <Text
                    style={{textAlign: 'center', color: '#000', fontSize: 18}}>
                    If you have any questions of concerns, send us an email
                  </Text>
                </View>
                <Image
                  source={Images.Pictures.mail}
                  style={{width: 36.15, height: 28.92}}
                />
                <Text style={{fontSize: 16, color: '#000', fontWeight: 'bold'}}>
                  info@stealfriday.com
                </Text>
              </View>

              <View style={styles.ortext}>
                <Text style={{fontSize: 25, color: '#000', fontWeight: 'bold'}}>
                  or
                </Text>
                <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
                  Send us a message
                </Text>
              </View>

              <View style={{width: '100%', marginTop: 10}}>
                <View style={styles.inputContainer}>
                  <View
                    style={{
                      marginVertical: 8,
                      borderColor:
                        state.focus === 'firstName' ? '#E4201E' : null,
                      borderWidth: state.focus === 'firstName' ? 1 : 0,
                      borderRadius: 20,
                      elevation: 5,
                      backgroundColor: 'white',
                    }}>
                    <FormInput
                      autoCapitalize="none"
                      value={userInfo.firstName}
                      onChangeText={value =>
                        setUserInfo({...userInfo, firstName: value})
                      }
                      iconL
                      iconLName="user"
                      iconLType="AntDesign"
                      placeHolder="First Name"
                      onFocus={() => setState({...state, focus: 'firstName'})}
                      onBlur={() => setState({...state, focus: ''})}
                    />
                  </View>

                  <View style={{marginVertical: 5}}>
                    <View
                      style={{
                        elevation: 5,
                        backgroundColor: 'white',
                        marginVertical: 8,
                        borderColor:
                          state.focus === 'lastName' ? '#E4201E' : null,
                        borderWidth: state.focus === 'lastName' ? 1 : 0,
                        borderRadius: 20,
                      }}>
                      <FormInput
                        autoCapitalize="none"
                        value={userInfo.LastName}
                        onChangeText={value =>
                          setUserInfo({...userInfo, LastName: value})
                        }
                        iconL
                        iconLName="user"
                        iconLType="AntDesign"
                        placeHolder="Last Name"
                        onFocus={() => setState({...state, focus: 'lastName'})}
                        onBlur={() => setState({...state, focus: ''})}
                      />
                    </View>
                  </View>

                  <View style={{marginVertical: 3}}>
                    <View
                      style={{
                        elevation: 5,
                        backgroundColor: 'white',
                        marginVertical: 8,
                        borderColor: state.focus === 'email' ? '#E4201E' : null,
                        borderWidth: state.focus === 'email' ? 1 : 0,
                        borderRadius: 20,
                      }}>
                      <FormInput
                        autoCapitalize="none"
                        value={userInfo.email}
                        onChangeText={value =>
                          setUserInfo({...userInfo, email: value})
                        }
                        iconL
                        iconLName="mail"
                        iconLType="AntDesign"
                        placeHolder="Email Address"
                        onFocus={() => setState({...state, focus: 'email'})}
                        onBlur={() => setState({...state, focus: ''})}
                      />
                    </View>
                  </View>

                  <View style={{marginVertical: 5}}>
                    <View
                      style={{
                        elevation: 5,
                        backgroundColor: 'white',
                        marginVertical: 8,
                        borderColor:
                          state.focus === 'messege' ? '#E4201E' : null,
                        borderWidth: state.focus === 'messege' ? 1 : 0,
                        borderRadius: 20,
                      }}>
                      <FormInput
                        styleI={{height: '100%', width: '100%'}}
                        autoCapitalize="none"
                        value={userInfo.messege}
                        multiLine={true}
                        textAlign
                        height={238}
                        textHeight={238}
                        onChangeText={value =>
                          setUserInfo({...userInfo, messege: value})
                        }
                        placeHolder="Type Here"
                        onFocus={() => setState({...state, focus: 'messege'})}
                        onBlur={() => setState({...state, focus: ''})}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      paddingVertical: 20,
                      width: '100%',
                      alignItems: 'center',
                    }}>
                    <AppButton
                      btnWidth={180}
                      label="Send"
                      text
                      onPress={() => setVisible(!visible)}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Overlays
        popupcontent
        btn
        btn5
        TexView
        label1="Your Message Sent!"
        press={() => {
          isRoute == true
            ? props.navigation.navigate('home')
            : props.navigation.navigate('Auth', {screen: 'login'});
        }}
        labletext="Close"
        visible={visible}
        toggleOverlay={() => {}}
      />
    </>
  );
};
export default ContactUs;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainBody: {
    width: '80%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: 30,
  },
  noticeBox: {
    width: '100%',
    height: 176,
    borderRadius: 10,
    backgroundColor: '#ffff',
    elevation: 5,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
