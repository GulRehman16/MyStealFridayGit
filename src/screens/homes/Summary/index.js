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
  OnPress,
} from 'react-native';

// import { Images } from '../../../../constants';
// import { AppButton, Header, Overlays } from '../../../../components';
import {Images} from '../../../constants';
import {Header, AppButton, Overlays} from '../../../components';

const Summary = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState({
    value: true,
    value2: true,
    value3: 1,
    value4: 1,
  });

  useEffect(() => {
    setState({...state, value: true});
    setState({...state, value2: true});
    setState({...state, value3: 1});
    setState({...state, value4: 1});
    const backAction = () => {
      navigation.navigate('checkOut', {value: state.value});
      return true;
    };
    let backHandler;
    navigation.addListener('focus', () => {
      backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
    });
    navigation.addListener('blur', () => {
      if (backHandler) {
        backHandler.remove();
      }
    });
  }, []);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar />
        <ImageBackground source={Images.Background.bg} style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}>
            <View style={{marginTop: 50}}>
              <Header
                leftIcon
                IconColor="#fff"
                leftIconProps={() => {
                  navigation.navigate(
                    'checkOut',
                    (params = {value2: state.value2}),
                  );
                }}
              />
            </View>
            <View style={styles.headerbox}>
              <Text
                style={{
                  marginVertical: 10,
                  color: '#fff',
                  fontSize: 20,
                  marginTop: 30,
                  textAlign: 'center',
                }}>
                Order Summary
              </Text>
            </View>
            <View
              style={{
                marginVertical: 10,
                borderBottomWidth: 0.75,
                borderColor: 'grey',
              }}>
              <View>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginRight: 10,
                  }}>
                  Product
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 5,
                }}>
                <View
                  style={{
                    marginVertical: 10,
                  }}>
                  <Text
                    style={{
                      color: '#aaa',
                      fontSize: 16,
                      marginRight: 10,
                    }}>
                    Product Name
                  </Text>
                  <Text
                    style={{
                      color: '#fff',

                      fontSize: 16,
                      marginRight: 10,
                      color: '#aaa',
                    }}>
                    Product Name
                  </Text>
                  <Text
                    style={{
                      color: '#fff',

                      fontSize: 16,
                      marginRight: 10,
                      color: '#aaa',
                    }}>
                    Product Name
                  </Text>
                </View>
                <View style={{marginVertical: 10}}>
                  <Text
                    style={{
                      color: '#aaa',
                      fontSize: 16,
                      marginRight: 10,
                    }}>
                    $15.99
                  </Text>
                  <Text
                    style={{
                      color: '#aaa',

                      fontSize: 16,
                      marginRight: 10,
                    }}>
                    $15.00
                  </Text>
                  <Text
                    style={{
                      color: '#aaa',
                      fontSize: 16,
                      marginRight: 10,
                    }}>
                    $15.00
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                // marginVertical: 5,
                borderBottomWidth: 0.75,
                borderColor: 'grey',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 5,
                }}>
                <View
                  style={{
                    marginVertical: 5,
                  }}>
                  <Text
                    style={{
                      color: '#aaa',
                      fontSize: 16,
                      marginRight: 10,
                    }}>
                    Shipping Charges
                  </Text>
                  <Text
                    style={{
                      color: '#aaa',
                      marginVertical: 10,

                      fontSize: 16,
                      marginRight: 10,
                    }}>
                    Total Amount:{' '}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      marginRight: 10,
                      marginVertical: 10,
                      color: '#aaa',
                    }}>
                    $15.99
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      marginRight: 10,
                      color: '#aaa',
                    }}>
                    $15.00
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                borderBottomWidth: 0.75,
                borderColor: 'grey',
              }}>
              <View
                style={{
                  flexDirection: 'row',

                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: 16,
                      marginRight: 10,
                    }}>
                    Shipping Address
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(
                      'checkOut',
                      (params = {value3: state.value3}),
                    );
                  }}>
                  <Text
                    style={{
                      color: '#1492E6',
                      fontSize: 16,
                    }}>
                    Change
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View style={{marginVertical: 15}}>
                  <Text
                    style={{
                      color: '#aaa',
                      fontSize: 12,
                    }}>
                    MAster Card
                  </Text>
                  <Text
                    style={{
                      color: '#aaa',
                      fontSize: 12,
                      marginVertical: 5,
                    }}>
                    12514 N Creekside Ct
                  </Text>
                  <Text
                    style={{
                      color: '#aaa',
                      fontSize: 12,
                      marginVertical: 5,
                    }}>
                    Mequon, Wisconsin
                  </Text>
                  <Text
                    style={{
                      color: '#aaa',
                      fontSize: 12,
                      marginVertical: 5,
                    }}>
                    {' '}
                    Zip Code: 12343
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                marginVertical: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: 16,
                      marginRight: 10,
                    }}>
                    Payment
                  </Text>
                  <Image source={Images.Icon.insurance} />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(
                      'checkOut',
                      (params = {value4: state.value4}),
                    );
                  }}>
                  <Text
                    style={{
                      color: '#1492E6',
                      fontSize: 16,
                    }}>
                    Change
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 30,
                }}>
                <View
                  style={{
                    // width: '20%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image source={Images.Pictures.path70} />
                  <Image source={Images.Pictures.Path69} />
                </View>
                <View style={{marginLeft: 10}}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#aaa',
                    }}>
                    MAster Card
                  </Text>
                  <Text
                    style={{
                      color: '#aaa',
                      fontSize: 12,
                    }}>
                    * * * * * * * * * 4543
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: 214,
                alignSelf: 'center',
                marginVertical: 25,
              }}>
              <AppButton
                label="Pay"
                text
                onPress={() => setVisible(!visible)}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>

      <Overlays
        popupcontent
        yesNobtn
        visible={visible}
        navigation={navigation}
        toggleOverlay={() => setVisible(false)}
      />
    </>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  body: {
    alignSelf: 'center',
    width: '90%',
    height: '100%',
  },
  select: {
    width: '90%',
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
    width: '90%',
    height: '100%',
    alignSelf: 'center',
  },
  noticeBox: {
    width: '90%',
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

// <Overlays
//         popupcontent
//         btn4
//         onCancel={() => {
//           navigation.navigate('CongratesPage');
//         }}
//         labletext="Close"
//         visible={visible}
//         toggleOverlay={() => setVisible(false)}
//       />
