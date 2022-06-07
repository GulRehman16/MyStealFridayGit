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
} from 'react-native';

import {AppButton, Header, Shoebox} from '../../../components';
import {Images} from '../../../constants';
import {useRoute} from '@react-navigation/native';

const ProductDetails = ({route, navigation, onPress}) => {
  const {itemId, otherParam, Image1} = route.params;

  const [isData, setData] = useState({
    bgImage: Images.Pictures.nikeShoe1,
    Price: '$15.00',
    Size: '8',
    Condition: 'New',
    Image: Images.Pictures.maskheader,
    Discription:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt',
  });

  return (
    <>
      <SafeAreaView style={styles.screenContainer}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <StatusBar backgroundColor={'white'} barStyle="dark-content" />
          <View style={{}}>
            <ImageBackground
              source={Images.Background.bg}
              resizeMode="cover"
              style={{width: '100%', height: '100%'}}>
              <View
                style={{
                  paddingTop: 30,
                  width: '90%',

                  alignSelf: 'center',
                }}>
                <Header
                  leftIcon
                  IconColor="#fff"
                  RightIcon
                  RICon
                  leftIconProps={() => {
                    navigation.goBack();
                  }}
                />
              </View>
              <View style={styles.mainBody}>
                <View
                  style={{
                    width: 353,
                    height: 300,
                    alignSelf: 'center',
                    marginTop: 40,
                  }}>
                  <Image
                    source={Image1}
                    resizeMode="contain"
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
                <View style={{width: '90%', alignSelf: 'center'}}>
                  <View style={{marginVertical: 5}}>
                    <Text style={{color: '#fff', fontSize: 18}}>
                      Nike Limited Edition
                    </Text>
                    <Text style={{color: '#fff', fontSize: 14}}>
                      Product Code:42303
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#fff',
                    marginVertical: 30,
                    borderTopStartRadius: 25,
                    borderTopEndRadius: 25,
                    elevation: 1,
                  }}>
                  <View
                    style={{
                      width: '80%',
                      alignSelf: 'center',
                      marginVertical: 5,
                    }}>
                    <View
                      style={{
                        marginVertical: 5,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomWidth: 0.5,
                      }}>
                      <Text>Price:</Text>
                      <Text>{isData.Price}</Text>
                    </View>
                    <View
                      style={{
                        marginVertical: 5,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomWidth: 0.5,
                      }}>
                      <Text>Size:</Text>
                      <Text>{isData.Size}</Text>
                    </View>
                    <View
                      style={{
                        marginVertical: 5,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomWidth: 0.5,
                      }}>
                      <Text>Condition:</Text>
                      <Text>{isData.Condition}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomWidth: 0.5,
                      }}>
                      <Text style={{marginTop: 20}}>Brand</Text>
                      <Image source={isData.Image} />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '800',
                          marginVertical: 5,
                        }}>
                        Description:
                      </Text>
                      <View style={{width: 278}}>
                        <Text style={{}}>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row', marginTop: 10}}>
                        <View style={{width: '70%', marginRight: 10}}>
                          <AppButton
                            label="Buy Now"
                            text
                            onPress={() => {
                              navigation.navigate('Homes', {
                                screen: 'checkOut',
                                params: {count: 0},
                              });
                            }}
                          />
                        </View>
                        <View style={{width: '25%', borderRadius: 10}}>
                          <AppButton style={{}} icon2 iconN={'shoppingcart'} />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
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
