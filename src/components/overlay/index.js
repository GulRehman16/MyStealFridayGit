import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {Button, Overlay} from 'react-native-elements';
import {AppButton, Header} from '../../components';
import {Images} from '../../constants';
import {CheckBox} from 'react-native-elements';
import {CircleCheckBox} from '../circlecheckbox';
import LottieView from 'lottie-react-native';

const Overlays = ({
  props,
  visible,
  toggleOverlay,
  btn,
  btn1,
  btn2,
  btn3,
  btn4,
  btn5,
  TexView,
  popupwidth,
  popupheight,
  popupcontent,
  popupcontent1,
  popupcontent2,
  label1,
  onCancel,
  labletext,
  btnNotice,
  navigation,
  nestedbtn,
  btnes,
  yesNobtn,
  press,
}) => {
  const [state, setState] = useState({checked: false});
  const [check, setCheck] = useState(false);
  const [isData, setData] = useState({
    ordernumber: '3241',
    orderDate: '12/2/22',
    product1: 'Nike Limited Collection By Hidden Sole',
    product2: 'Puma By Hidden Sole',
    Qty: ' 1',
    Qty2: ' 2',
    price: '$12.00',
    DeliveryCharges: '$05.00',
    CardUsed: '********1234',
    TotalAmountPaid: '$20.40',
    OrdersStatus: 'Pending',
    ShippingDetails:
      'Street Address: Licolon Street City: NewYork city State: New York Zip Code: 2435132',
  });

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Overlay
          isVisible={visible}
          onBackdropPress={toggleOverlay}
          overlayStyle={{borderRadius: 15, elevation: 10}}>
          {popupcontent && (
            <View style={{}}>
              {btn && (
                <View style={{marginTop: 30, alignSelf: 'center'}}>
                  <LottieView
                    style={{width: 100, height: 100}}
                    source={require('../../assets/Lottie/99398-check-mark-black.json')}
                    autoPlay
                    loop
                  />
                </View>
              )}
              {btn1 && (
                <View
                  style={{
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={Images.Icon.circle} />
                </View>
              )}
              {btn2 && (
                <View
                  style={{
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: 'black',
                      marginVertical: 2,
                    }}>
                    Notice
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      color: 'black',
                      marginVertical: 2,
                    }}>
                    Are you sure, you want to proceed with payment?
                  </Text>
                </View>
              )}

              {btnNotice && !check ? (
                <View
                  style={{
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                  }}>
                  <Image source={Images.Icon.circle} />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: 'black',
                      marginVertical: 2,
                    }}>
                    Notice
                  </Text>
                  <Text style={{marginVertical: 15, textAlign: 'center'}}>
                    Are you sure, you want to {'\n'} proceed with payment?
                  </Text>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <View style={{margin: 5, borderWidth: 1, borderRadius: 50}}>
                      <AppButton
                        label="No"
                        text
                        backgroundColor="#fff"
                        color="#000"
                        btnWidth={99}
                        btnHeight={39}
                        onPress={() => toggleOverlay(false)}
                      />
                    </View>
                    <View
                      style={{
                        margin: 5,
                        borderRadius: 50,
                        borderWidth: 1,
                        borderColor: 'red',
                      }}>
                      <AppButton
                        label="Yes"
                        text
                        btnWidth={100}
                        btnHeight={40}
                        onPress={() => {
                          setCheck(true);
                        }}
                      />
                    </View>
                  </View>
                </View>
              ) : null}
              {check === true
                ? nestedbtn && (
                    <View
                      style={{
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                      }}>
                      <LottieView
                        style={{width: 100, height: 100}}
                        source={require('../../assets/Lottie/99398-check-mark-black.json')}
                        autoPlay
                        loop
                      />
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 18,
                          color: 'black',
                          marginVertical: 2,
                        }}>
                        Payment Processed {'\n'} Successfully
                      </Text>
                      <AppButton
                        label={labletext}
                        text
                        btnWidth={137}
                        btnHeight={40}
                        onPress={() => {
                          navigation.navigate('Auth', {screen: 'login'});
                        }}
                      />
                    </View>
                  )
                : null}

              {btn3 && (
                <View
                  style={{
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={Images.Icon.circle} />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: 'black',
                      marginVertical: 2,
                    }}>
                    Notice
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      color: 'black',
                      marginVertical: 2,
                    }}>
                    Are you sure, you want to proceed with payment?
                  </Text>
                </View>
              )}

              {yesNobtn && (
                <View
                  style={{
                    alignItems: 'center',
                    marginVertical: 0,
                    padding: 10,
                  }}>
                  <Text
                    style={{
                      width: '100%',
                      marginVertical: 20,
                      textAlign: 'center',
                      color: 'red',
                      fontWeight: '700',
                    }}>
                    Notice
                  </Text>
                  <Text style={{marginVertical: 15, textAlign: 'center'}}>
                    Are You Sure You Want {'\n'} To Make This Payment?
                  </Text>
                  <View style={{alignItems: 'center', flexDirection: 'row'}}>
                    <View
                      style={{
                        marginRight: 10,
                        borderWidth: 1,
                        borderRadius: 25,
                        borderColor: 'red',
                      }}>
                      <AppButton
                        label="Yes"
                        text
                        btnWidth={80}
                        btnHeight={40}
                        onPress={() => {
                          navigation.navigate('CongratesPage'),
                            toggleOverlay(false);
                        }}
                      />
                    </View>
                    <View style={{borderWidth: 1, borderRadius: 25}}>
                      <AppButton
                        label="No"
                        text
                        backgroundColor="#fff"
                        color="#000"
                        btnWidth={80}
                        btnHeight={40}
                        onPress={() => toggleOverlay(false)}
                      />
                    </View>
                  </View>
                </View>
              )}
              {btn4 && (
                <View
                  style={{
                    alignItems: 'center',
                    marginVertical: 0,
                    padding: 10,
                  }}>
                  <Text
                    style={{
                      width: '100%',
                      marginVertical: 20,
                      textAlign: 'center',
                      color: 'red',
                      fontWeight: '700',
                    }}>
                    Notice
                  </Text>
                  <Text style={{marginVertical: 15, textAlign: 'center'}}>
                    Are You Sure You Want {'\n'} To Make This Payment?
                  </Text>
                  <View style={{alignItems: 'center', flexDirection: 'row'}}>
                    <View
                      style={{
                        marginRight: 10,
                        borderWidth: 1,
                        borderRadius: 25,
                        borderColor: 'red',
                      }}>
                      <AppButton
                        label="Yes"
                        text
                        btnWidth={80}
                        btnHeight={40}
                        onPress={onCancel}
                      />
                    </View>
                    <View style={{borderWidth: 1, borderRadius: 25}}>
                      <AppButton
                        label="No"
                        text
                        backgroundColor="#fff"
                        color="#000"
                        btnWidth={80}
                        btnHeight={40}
                        onPress={() => toggleOverlay(false)}
                      />
                    </View>
                  </View>
                </View>
              )}
              {TexView && (
                <View style={{width: 260, marginBottom: -30, marginTop: 30}}>
                  <Text
                    style={{
                      marginVertical: 8,
                      fontSize: 18,
                      textAlign: 'center',
                    }}>
                    {label1}
                  </Text>
                </View>
              )}

              {btn5 && (
                <View style={{padding: 30, alignItems: 'center'}}>
                  <AppButton
                    label={labletext}
                    onPress={press}
                    text
                    btnWidth={137}
                    btnHeight={40}
                  />
                </View>
              )}
              {btnes && (
                <View style={{padding: 30, alignItems: 'center'}}>
                  <AppButton
                    label={labletext}
                    onPress={() => {
                      navigation.replace('Statics', {screen: 'login'});
                    }}
                    text
                    btnWidth={137}
                    btnHeight={40}
                  />
                </View>
              )}
            </View>
          )}

          <View>
            {popupcontent1 && (
              <View style={{width: 320, borderRadius: 30, padding: 10}}>
                <ScrollView
                  keyboardShouldPersistTaps="handled"
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{flexGrow: 1}}>
                  <Header
                    RightIcon
                    RICon2
                    RightIconPress={() => toggleOverlay(false)}
                  />
                  <View style={{justifyContent: 'center', marginVertical: 20}}>
                    <View>
                      <Text
                        style={{
                          fontSize: 22,
                          color: 'black',
                          textAlign: 'center',
                        }}>
                        {' '}
                        Orders Details
                      </Text>
                    </View>
                    <View style={{}}>
                      <View
                        style={{
                          width: '80%',
                          alignSelf: 'center',
                          marginVertical: 10,
                        }}>
                        <View
                          style={{
                            marginVertical: 15,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderBottomWidth: 0.5,
                          }}>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              color: '#000',
                              marginTop: 25,
                            }}>
                            Order No.
                          </Text>
                          <Text style={{marginTop: 25}}>
                            {isData.ordernumber}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderBottomWidth: 0.5,
                          }}>
                          <Text
                            style={{
                              marginVertical: 5,
                              fontWeight: 'bold',
                              color: '#000',
                            }}>
                            Orders Date
                          </Text>
                          <Text style={{marginTop: 5}}>{isData.orderDate}</Text>
                        </View>
                        <View
                          style={{
                            width: '100%',
                            marginVertical: 5,

                            borderBottomWidth: 0.5,
                          }}>
                          <View
                            style={{
                              width: '100%',
                              marginVertical: 5,
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}>
                            <Text
                              style={{
                                marginVertical: 5,
                                fontWeight: 'bold',
                                color: '#000',
                              }}>
                              Product:
                            </Text>

                            <Text
                              style={{
                                marginVertical: 5,
                                fontWeight: 'bold',
                                color: '#000',
                              }}>
                              Qty
                            </Text>

                            <Text
                              style={{
                                marginVertical: 5,
                                fontWeight: 'bold',
                                color: '#000',
                              }}>
                              Price
                            </Text>
                          </View>
                          <View
                            style={{
                              width: '100%',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}>
                            <Text style={{marginVertical: 5, width: '40%'}}>
                              {isData.product1}
                            </Text>

                            <Text style={{marginVertical: 5}}>
                              {isData.Qty}
                            </Text>

                            <Text style={{marginVertical: 5}}>
                              {isData.price}
                            </Text>
                          </View>
                          <View
                            style={{
                              width: '100%',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}>
                            <Text style={{marginVertical: 5, width: '40%'}}>
                              {isData.product2}
                            </Text>

                            <Text style={{marginVertical: 5}}>
                              {isData.Qty2}
                            </Text>

                            <Text style={{marginVertical: 5}}>
                              {isData.price}
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            marginVertical: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderBottomWidth: 0.5,
                          }}>
                          <Text
                            style={{
                              marginVertical: 5,
                              fontWeight: 'bold',
                              color: '#000',
                            }}>
                            Delivery Charges:
                          </Text>
                          <Text style={{marginTop: 5}}>
                            {isData.DeliveryCharges}
                          </Text>
                        </View>
                        <View
                          style={{
                            marginVertical: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderBottomWidth: 0.5,
                          }}>
                          <Text
                            style={{
                              marginVertical: 5,
                              fontWeight: 'bold',
                              color: '#000',
                            }}>
                            Card Used:
                          </Text>
                          <Text style={{marginTop: 5}}>{isData.CardUsed}</Text>
                        </View>
                        <View
                          style={{
                            marginVertical: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderBottomWidth: 0.5,
                          }}>
                          <Text
                            style={{
                              marginVertical: 5,
                              fontWeight: 'bold',
                              color: '#000',
                            }}>
                            Total Amount Paid:
                          </Text>
                          <Text style={{marginTop: 5}}>
                            {isData.TotalAmountPaid}
                          </Text>
                        </View>
                        <View
                          style={{
                            marginVertical: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderBottomWidth: 0.5,
                          }}>
                          <Text
                            style={{
                              marginVertical: 5,
                              fontWeight: 'bold',
                              color: '#000',
                            }}>
                            Orders Status
                          </Text>
                          <Text style={{marginTop: 5}}>
                            {isData.OrdersStatus}
                          </Text>
                        </View>
                        <View style={{width: '50%', marginVertical: 5}}>
                          <Text
                            style={{
                              marginVertical: 5,
                              fontWeight: 'bold',
                              color: '#000',
                            }}>
                            Shipping Details:
                          </Text>
                          <Text>{isData.ShippingDetails}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>
            )}
          </View>

          {popupcontent2 && (
            <View style={{padding: 15}}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                  Filter
                </Text>
                <View style={{}}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontWeight: '400',
                      marginVertical: 5,
                    }}>
                    Conditions
                  </Text>
                  <View style={{flexDirection: 'row', paddingRight: 10}}>
                    <CheckBox
                      onPress={() => {
                        setState({checked: !state.checked});
                      }}
                      center
                      checkedIcon="circle-o"
                      uncheckedIcon="dot-circle-o"
                      uncheckedColor="red"
                      checkedColor="grey"
                      checked={!state.checked}
                    />
                    <Text style={{color: '#000', marginTop: 20}}>
                      New To Old {'            '}
                    </Text>
                  </View>
                  <View style={styles.select}>
                    <CheckBox
                      onPress={() => {
                        setState({checked: !state.checked});
                      }}
                      center
                      checkedIcon="circle-o"
                      uncheckedIcon="dot-circle-o"
                      uncheckedColor="red"
                      checkedColor="grey"
                      checked={state.checked}
                    />
                    <Text style={{color: '#000'}}>New To Old</Text>
                  </View>
                </View>

                <View
                  style={{
                    width: 190,
                    height: 2,
                    backgroundColor: '#00000029',
                    marginVertical: 1,
                  }}></View>
                <View>
                  <View style={{}}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        fontWeight: '400',
                        marginVertical: 5,
                      }}>
                      Prices
                    </Text>
                    <View style={{flexDirection: 'row', paddingRight: 10}}>
                      <CheckBox
                        onPress={() => {
                          setState({checked: !state.checked});
                        }}
                        center
                        checkedIcon="circle-o"
                        uncheckedIcon="dot-circle-o"
                        uncheckedColor="red"
                        checkedColor="grey"
                        checked={!state.checked}
                      />
                      <Text style={{color: '#000', marginTop: 20}}>
                        Price Low To High
                      </Text>
                    </View>
                    <View style={styles.select}>
                      <CheckBox
                        onPress={() => {
                          setState({checked: !state.checked});
                        }}
                        center
                        checkedIcon="circle-o"
                        uncheckedIcon="dot-circle-o"
                        uncheckedColor="red"
                        checkedColor="grey"
                        checked={state.checked}
                      />
                      <Text style={{color: '#000'}}>Price High To Low</Text>
                    </View>
                  </View>
                </View>
                <View style={{marginLeft: 25}}>
                  <AppButton
                    label="Clear"
                    text
                    btnWidth={137}
                    btnHeight={40}
                    onPress={() => toggleOverlay(false)}
                  />
                </View>
              </View>
            </View>
          )}
        </Overlay>
      </ScrollView>
    </SafeAreaView>
  );
};

export {Overlays};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  body: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
  select: {
    // width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -20,
    // justifyContent: 'space-between',
  },
});
