import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FormInput, AppButton} from '../../components';
import {Images} from '../../constants';
import {Header} from '../../components';

const CustomDrawer = ({navigation, route}) => {
  const check = route?.params?.value;
  useEffect(() => {
    console.log('check', check);
  }, [check]);

  const drawerData = [
    {
      image: Images.Icon.home,
      stack: '',
      text: 'Home',
      Press: () => navigation.navigate('home'),
    },
    {
      image: Images.Icon.user,
      stack: '',
      text: 'Profile Settings',
      Press: () => navigation.navigate('Statics', {screen: 'profileSettings'}),
    },
    {
      image: Images.Icon.Auto,
      stack: '',
      text: 'Auto Resubscription',
      nav: '',
      Press: () => navigation.navigate('autoResubscription'),
    },
    {
      image: Images.Icon.favourite,
      stack: '',
      text: 'Favorites',
      Press: () => navigation.navigate('Favorites'),
    },
    {
      image: Images.Icon.card,
      stack: '',
      text: 'Cart',
      Press: () => navigation.navigate('CartScreen'),
    },
    {
      image: Images.Icon.order,
      stack: '',
      text: 'My Orders',
      Press: () => navigation.navigate('MyOrder'),
    },
    {
      image: Images.Icon.contact,
      stack: '',
      text: 'Contact Us',
      Press: () => navigation.navigate('ContactUs', {value: true}),
    },
    {
      image: Images.Icon.logout,
      stack: '',
      text: 'Logout',
      nav: '',
      Press: () => navigation.replace('Auth', {screen: 'login'}),
    },
  ];
  let [orientation, setOrietation] = useState(true);
  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      setOrietation(isPortrait());
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'transparent'} barStyle="dark-content" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.closeDrawer()}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
          }}>
          <ImageBackground
            resizeMode="stretch"
            source={Images.Background.drawerBg}
            style={{
              width: '100%',
              height: '100%',
            }}>
            <View
              style={{
                alignSelf: 'center',
                marginTop: orientation ? '23%' : '10%',
                marginLeft: -35,
              }}>
              <Image
                resizeMode="contain"
                source={Images.Icon.logo}
                style={{width: 166, height: 51, marginLeft: -10}}
              />
            </View>

            <View
              style={{
                marginTop: orientation ? '30%' : '5%',
                marginLeft: '14%',
                height: '50%',
                alignItems: 'flex-start',
                justifyContent: 'space-evenly',
              }}>
              {drawerData.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={item.Press}
                    style={{flexDirection: 'row'}}
                    activeOpacity={0.8}>
                    <Image
                      source={item.image}
                      style={{
                        width: 17.81,
                        height: 19.79,
                        marginLeft: -10,
                        marginTop: orientation ? 0 : 20,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#ffff',
                        marginLeft: 5,
                        padding: orientation ? 0 : 20,
                      }}>
                      {item.text}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export {CustomDrawer};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// <View
// style={{
//   marginTop: orientation ? '30%' : '5%',
//   marginLeft: '14%',
//   height: '50%',
//   alignItems: 'flex-start',
//   justifyContent: 'space-evenly',
// }}>
// <TouchableOpacity onPress={() => navigation.navigate('home')}>
//   <Image source={Images.Icon.home} />
//   <Text>Home</Text>

// </TouchableOpacity>
// <TouchableOpacity onPress={() => navigation.navigate('profileSettings')}>
//   <Image source={Images.Icon.home} />
//   <Text>Home</Text>
// </TouchableOpacity>
// <TouchableOpacity onPress={() => navigation.navigate('autoResubscription')}>
//   <Image source={Images.Icon.home} />
//   <Text>Home</Text>

// </TouchableOpacity>
// <TouchableOpacity onPress={() => navigation.navigate('home')}>
//   <Image source={Images.Icon.home} />
//   <Text>Home</Text>

// </TouchableOpacity>

// </View>
