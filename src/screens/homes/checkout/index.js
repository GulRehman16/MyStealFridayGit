import React, {useEffect, useState} from 'react';
import {CheckBox} from 'react-native-elements';
import StepIndicator from 'react-native-step-indicator';

import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  Image,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  textChange,
  BackHandler,
} from 'react-native';
import {Header, AppButton} from '../../../components';
import {Images} from '../../../constants';
import {RotateInUpLeft} from 'react-native-reanimated';
import {count} from 'rsuite/esm/utils/ReactChildren';
import {useIsFocused} from '@react-navigation/native';

const CheckOut = props => {
  const isFocused = useIsFocused();
  let [currentPosition, setCurrentPosition] = useState({checked: 0});
  const [state, setState] = useState({checked: false});
  const labels = ['Shipping Details', 'Address', 'Payments'];

  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fff',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#000',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fff',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fff',
    stepIndicatorUnFinishedColor: '#000',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#aaaa',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#ffff',
  };

  console.log(props?.route?.params);

  let isCheck = props?.route?.params?.value;
  let onCheck = props?.route?.params?.value2;
  let onCheck2 = props?.route?.params?.value3;
  let onCheck3 = props?.route?.params?.value4;

  useEffect(() => {
    if (isFocused) {
      onCheck3 === 1
        ? setCurrentPosition({...currentPosition, checked: 2})
        : null;
      isCheck === true
        ? setCurrentPosition({...currentPosition, checked: 0})
        : null;

      onCheck2 === 1
        ? setCurrentPosition({...currentPosition, checked: 1})
        : null;

      onCheck === true
        ? setCurrentPosition({...currentPosition, checked: 2})
        : null;
    }
  }, [isFocused]);

  const backAction = () => {
    props.navigation.goBack();
    return true;
  };

  let backHandler;
  props.navigation.addListener('focus', () => {
    backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
  });
  props.navigation.addListener('blur', () => {
    if (backHandler) {
      backHandler.remove();
    }
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="light-content"
        translucent={true}
      />
      <ImageBackground source={Images.Background.bg} style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{marginTop: 5, width: '90%', alignSelf: 'center'}}>
            <View style={{marginTop: 50}}>
              <Header
                leftIcon
                screenName1
                screenText1="Checkout"
                colorT="#fff"
                IconColor="#fff"
                leftIconProps={() => {
                  setCurrentPosition({
                    ...currentPosition,
                    checked: currentPosition.checked - 1,
                  });
                  currentPosition.checked === 0
                    ? props.navigation.goBack()
                    : null;
                }}
              />
            </View>
            <View style={{marginTop: 25}}>
              <StepIndicator
                customStyles={customStyles}
                currentPosition={currentPosition.checked}
                labels={labels}
                stepCount={3}
              />
            </View>
          </View>
          <View style={styles.body}>
            <View style={{width: '90%', alignSelf: 'center'}}>
              {currentPosition.checked == 0 && (
                <View style={{alignItems: 'center'}}>
                  <View
                    style={{
                      width: '100%',
                      marginTop: 30,
                    }}>
                    <Text
                      style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
                      Shipping Charges
                    </Text>

                    <View style={styles.select}>
                      <Text style={{fontSize: 12, color: 'white'}}>
                        Standard Delivery $9.99{'\n'}Order will be delivered in
                        3- 5 Business Days.
                      </Text>
                      <CheckBox
                        onPress={() => {
                          setState({checked: !state.checked});
                        }}
                        center
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        uncheckedColor="#1492E6"
                        checked={!state.checked}
                      />
                    </View>
                    <View style={styles.select}>
                      <Text style={{fontSize: 12, color: 'white'}}>
                        Express Delivery $15.9{'\n'}Order will be delivered in 2
                        Business Days.
                      </Text>
                      <CheckBox
                        onPress={() => {
                          setState({checked: !state.checked});
                        }}
                        center
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        uncheckedColor="#1492E6"
                        checked={state.checked}
                      />
                    </View>
                  </View>
                  <View style={styles.mainBox}>
                    <Text style={styles.mainBoxHead}>Summary</Text>
                    <View
                      style={{
                        height: '75%',
                        width: '100%',
                        justifyContent: 'space-evenly',
                      }}>
                      <View style={styles.box}>
                        <Text style={{fontSize: 16, color: 'black'}}>
                          Price(2)
                        </Text>
                        <Text style={{fontSize: 16, color: 'black'}}>
                          $250.00
                        </Text>
                      </View>
                      <View style={styles.box}>
                        <Text style={{fontSize: 16, color: 'black'}}>
                          Shipping Charges
                        </Text>
                        <Text style={{fontSize: 16, color: 'black'}}>
                          $15.99
                        </Text>
                      </View>
                      <View style={styles.box}>
                        <Text style={{fontSize: 16, color: 'black'}}>
                          Total Price
                        </Text>
                        <Text style={{fontSize: 16, color: 'black'}}>
                          $265.99
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
              {currentPosition.checked == 1 && (
                <View style={{alignItems: 'center', marginVertical: 20}}>
                  <View style={{flex: 1}}>
                    <View style={{alignSelf: 'center', marginBottom: 50}}>
                      <View style={{marginTop: 5, alignSelf: 'center'}}>
                        <View style={{marginVertical: 5}}>
                          <View style={{width: 310, marginVertical: 5}}>
                            <Text
                              style={{
                                color: '#fff',
                                fontSize: 14,
                                textAlign: 'center',
                              }}>
                              Provide Your Shipping Address
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View
                        style={{
                          marginVertical: 5,
                          borderBottomWidth: 0.75,
                          borderColor: 'grey',
                        }}>
                        <Text style={{color: '#aaa', marginLeft: 3}}>
                          Address
                        </Text>
                        <TextInput
                          placeholder="12514 N Creekside Ct"
                          placeholderTextColor="#fff"
                          style={{
                            backgroundColor: 'transparent',
                            color: '#fff',
                            fontSize: 14,
                            fontWeight: '500',
                          }}
                        />
                      </View>
                      <View
                        style={{
                          marginVertical: 10,
                          borderBottomWidth: 0.75,
                          borderColor: 'grey',
                        }}>
                        <Text style={{color: '#aaa', marginLeft: 3}}>City</Text>
                        <TextInput
                          placeholder="Victoria Island"
                          placeholderTextColor="#fff"
                          style={{
                            backgroundColor: 'transparent',
                            color: '#fff',
                            fontSize: 14,
                            fontWeight: '500',
                          }}
                        />
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View
                          style={{
                            width: '40%',
                            marginVertical: 10,
                            borderBottomWidth: 0.75,
                            borderColor: 'grey',
                          }}>
                          <Text
                            style={{
                              color: '#aaa',
                              fontSize: 14,
                              marginLeft: 3,
                            }}>
                            State
                          </Text>
                          <TextInput
                            placeholder="Lagos State"
                            placeholderTextColor="#fff"
                            style={{
                              backgroundColor: 'transparent',
                              fontWeight: '600',
                              fontSize: 14,
                              color: 'black',
                            }}
                          />
                        </View>
                        <View
                          style={{
                            width: '40%',
                            marginVertical: 10,
                            borderBottomWidth: 0.75,
                            borderColor: 'grey',
                          }}>
                          <Text
                            style={{
                              color: '#aaa',
                              fontSize: 14,
                              marginLeft: 3,
                            }}>
                            Zip Code
                          </Text>
                          <TextInput
                            placeholder="75080"
                            placeholderTextColor="#fff"
                            style={{
                              backgroundColor: 'transparent',
                              fontWeight: '600',
                              fontSize: 14,
                              color: 'black',
                            }}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              )}
              {currentPosition.checked == 2 && (
                <View style={{alignItems: 'center', marginVertical: 20}}>
                  <View style={{flex: 1}}>
                    <View style={{alignSelf: 'center'}}>
                      <View style={styles.headerbox}>
                        <View style={[styles.box1, {backgroundColor: '#000'}]}>
                          <Image source={Images.Icon.PayPal1} />
                        </View>
                        <View style={styles.box1}>
                          <Image source={Images.Icon.Cradit} />
                        </View>
                        <View style={[styles.box1, {backgroundColor: '#000'}]}>
                          <Image source={Images.Icon.Saved} />
                        </View>
                      </View>
                      <View style={{marginTop: 5, alignSelf: 'center'}}>
                        <View style={{marginVertical: 5}}></View>
                      </View>
                      <View
                        style={{
                          marginVertical: 10,
                          borderBottomWidth: 0.75,
                          borderColor: 'grey',
                        }}>
                        <Text
                          style={{
                            color: '#aaa',
                            fontSize: 14,
                            marginLeft: 5,
                          }}>
                          Name on Card
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <TextInput
                            placeholder="David Spade"
                            placeholderTextColor="#fff"
                            style={{
                              backgroundColor: 'transparent',
                              fontWeight: 'bold',
                              fontSize: 14,
                              color: 'black',
                            }}
                          />
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Image source={Images.Pictures.path70} />
                            <Image source={Images.Pictures.Path69} />
                          </View>
                        </View>
                      </View>
                      <View
                        style={{
                          marginVertical: 10,
                          borderBottomWidth: 0.75,
                          borderColor: 'grey',
                        }}>
                        <Text style={{color: '#aaa', marginLeft: 3}}>
                          Card Number
                        </Text>
                        <TextInput
                          placeholder="4560 5674 3224 4543"
                          placeholderTextColor="#fff"
                          style={{
                            backgroundColor: 'transparent',
                            color: '#fff',
                            fontSize: 14,
                            fontWeight: '500',
                          }}
                        />
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View
                          style={{
                            width: '40%',
                            marginVertical: 10,
                            borderBottomWidth: 0.75,
                            borderColor: 'grey',
                          }}>
                          <Text
                            style={{
                              color: '#aaa',
                              fontSize: 14,
                              marginLeft: 3,
                            }}>
                            Expiry Date
                          </Text>
                          <TextInput
                            placeholder="09/18"
                            placeholderTextColor="#fff"
                            style={{
                              backgroundColor: 'transparent',
                              fontWeight: '600',
                              fontSize: 14,
                              color: 'black',
                            }}
                          />
                        </View>
                        <View
                          style={{
                            width: '40%',
                            marginVertical: 10,
                            borderBottomWidth: 0.75,
                            borderColor: 'grey',
                          }}>
                          <Text
                            style={{
                              color: '#aaa',
                              fontSize: 14,
                              marginLeft: 3,
                            }}>
                            CCV
                          </Text>
                          <TextInput
                            placeholder="667"
                            placeholderTextColor="#fff"
                            style={{
                              backgroundColor: 'transparent',
                              fontWeight: '600',
                              fontSize: 14,
                              color: 'black',
                            }}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              )}

              <View>
                <TouchableOpacity
                  style={styles.NextBtn}
                  onPress={() => {
                    setCurrentPosition({checked: currentPosition.checked + 1}),
                      currentPosition.checked == 2
                        ? props.navigation.navigate('Summary')
                        : null;
                  }}>
                  <Text style={styles.nextBtnText}>Next</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default CheckOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
  body: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
  select: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  mainBox: {
    marginTop: 30,
    width: '100%',
    height: 218,
    backgroundColor: 'white',
    borderRadius: 40,
  },
  box: {
    alignSelf: 'center',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainBoxHead: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
    fontWeight: '600',
    marginTop: 10,
  },
  NextBtn: {
    width: 214,
    backgroundColor: 'red',
    borderRadius: 25,
    alignSelf: 'center',
    padding: 2,
    marginVertical: 30,
  },
  nextBtnText: {
    color: '#fff',
    textAlign: 'center',
    padding: 10,
  },
  headerbox: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  PreviBtn: {},
  box1: {
    width: '30%',
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 4,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
