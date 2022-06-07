import React, {useState, useEffect} from 'react';
import {
  BackHandler,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FormInput, AppButton, CheckBox, Overlays} from '../../../components';

const CreateNewPassWord = props => {
  const [state, setState] = useState({
    email: '',
    password: '',
    focus: '',
    secureText: true,
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
                <Text style={styles.headingText}>Create New Password</Text>
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
                  }}></View>
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
                    onChangeText={value =>
                      setState({...state, password: value})
                    }
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
                    borderColor: state.focus === 'password' ? '#CD1C1B' : null,
                    borderWidth: state.focus === 'password' ? 1 : 0,
                    borderRadius: 20,
                  }}>
                  <FormInput
                    value={state.password}
                    onChangeText={value =>
                      setState({...state, password: value})
                    }
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
                    placeHolder="Confirm Password"
                    onFocus={() => setState({...state, focus: 'password'})}
                    onBlur={() => setState({...state, focus: ''})}
                  />
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
                    label="Update Password"
                    onPress={() => setVisible(!visible)}
                  />
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
        label1="Password Changed Successfully"
        press={() => {
          isRoute == true
            ? props.navigation.navigate('home')
            : props.navigation.navigate('Auth', {screen: 'login'});
        }}
        labletext="Continue"
        visible={visible}
        toggleOverlay={() => {}}
      />
    </>
  );
};

export default CreateNewPassWord;

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
