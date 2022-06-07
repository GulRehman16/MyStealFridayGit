import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  FlatList,
  SafeAreaView,
  BackHandler,
  EventEmitter,
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import LinearGradient from 'react-native-linear-gradient';
import {Boxs, TextWithLine, ViewMore} from '../../../components';
import {Themes, Images} from '../../../constants';

const Home = ({navigation}) => {
  // const isCheck = navigation?.route?.params?.value;
  // console.log('duniya', isCheck);
  const backAction = () => {
    BackHandler.exitApp();
    return true;
  };

  let backHandler;
  navigation.addListener('focus', () => {
    backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
  });
  navigation.addListener('blur', () => {
    if (backHandler) {
      backHandler.remove();
    }
  });

  const [visible, setVisible] = useState(false);

  const data = [
    {
      color: Themes.boxColors.grayLite,
      text: 'old',
      img: Images.Icon.grayStar,
      itemImg: Images.Pictures.tShirt2,
      itemName: 'Gym T-Shirt',
      ammount: ' $15.00',
      imgW: 65,
      imgH: 100,
      Press2: () =>
        navigation.navigate('ProductItem', {
          catagory: 'Shirt',
        }),
      Press1: () =>
        navigation.navigate('ProductDetails', {
          itemId: 86,
          otherParam: 'anything you want here',
          Image1: Images.Pictures.tShirt2,
        }),
    },
    {
      color: Themes.boxColors.purpulLite,
      text: 'old',
      img: Images.Icon.purpleStar,
      itemImg: Images.Pictures.purpleShoes,
      ammount: ' $15.00',
      itemName: 'Nike Collection',
      imgW: 75,
      imgH: 80,
      Press2: () =>
        navigation.navigate('ProductItem', {
          catagory: 'Shoes',
        }),
      Press1: () =>
        navigation.navigate('ProductDetails', {
          Image1: Images.Pictures.purpleShoes,
        }),
    },
    {
      color: Themes.boxColors.blueLite,
      text: 'New',
      itemName: 'Beats Up HeadSet',
      img: Images.Icon.star1,
      itemImg: Images.Pictures.headPhone,
      ammount: ' $15.00',
      imgW: 65,
      imgH: 65,
      Press2: () =>
        navigation.navigate('ProductItem', {
          catagory: 'Accessories',
        }),
      Press1: () =>
        navigation.navigate('ProductDetails', {
          Image1: Images.Pictures.headPhone,
        }),
    },
    {
      img: Images.Icon.greenStar,
      itemImg: Images.Pictures.greenShoes,
      color: Themes.boxColors.greenLite,
      text: 'New',
      ammount: ' $15.00',
      itemName: 'Nike Collection',
      imgW: 60,
      imgH: 65,

      Press1: () =>
        navigation.navigate('ProductDetails', {
          Image1: Images.Pictures.greenShoes,
        }),
    },

    {
      color: Themes.boxColors.grayLite,
      text: 'old',
      img: Images.Icon.grayStar,
      itemName: 'Gym T-Shirt',
      itemImg: Images.Pictures.tShirt1,
      ammount: ' $15.00',
      imgW: 70,
      imgH: 100,
      Press2: () =>
        navigation.navigate('ProductItem', {
          catagory: 'Shoes',
        }),
      Press1: () =>
        navigation.navigate('ProductDetails', {
          Image1: Images.Pictures.tShirt1,
        }),
    },
  ];

  const data2 = [
    {
      color: Themes.boxColors.grayLite,
      text: 'old',
      img: Images.Icon.grayStar,
      itemImg: Images.Pictures.tShirt2,
      itemName: 'Gym T-Shirt',
      ammount: ' $15.00',
      imgW: 65,
      imgH: 100,
      Press2: () =>
        navigation.navigate('ProductItem', {
          catagory: 'Shoes',
        }),
      Press2: () =>
        navigation.navigate('ProductDetails', {
          Image1: Images.Pictures.tShirt2,
        }),
    },
    {
      color: Themes.boxColors.purpulLite,
      text: 'old',
      img: Images.Icon.purpleStar,
      itemImg: Images.Pictures.purpleShoes,
      ammount: ' $15.00',
      itemName: 'Nike Collection',
      imgW: 75,
      imgH: 80,
      Press2: () =>
        navigation.navigate('ProductItem', {
          catagory: 'Shoes',
        }),
      Press2: () =>
        navigation.navigate(
          'ProductDetails',

          {
            Image1: Images.Pictures.purpleShoes,
          },
        ),
    },
    {
      color: Themes.boxColors.blueLite,
      text: 'New',
      itemName: 'Beats Up HeadSet',
      img: Images.Icon.star1,
      itemImg: Images.Pictures.headPhone,
      ammount: ' $15.00',
      imgW: 65,
      imgH: 65,
      Press2: () =>
        navigation.navigate('ProductItem', {
          catagory: 'Shoes',
        }),
      Press2: () =>
        navigation.navigate('ProductDetails', {
          Image1: Images.Pictures.headPhone,
        }),
    },
    {
      img: Images.Icon.greenStar,
      itemImg: Images.Pictures.greenShoes,
      color: Themes.boxColors.greenLite,
      text: 'New',
      ammount: ' $15.00',
      itemName: 'Nike Collection',
      imgW: 60,
      imgH: 65,
      Press2: () =>
        navigation.navigate('ProductItem', {
          catagory: 'Shoes',
        }),
      Press2: () =>
        navigation.navigate('ProductDetails', {
          Image1: Images.Pictures.greenShoes,
        }),
    },

    {
      color: Themes.boxColors.redLite,
      text: 'old',
      img: Images.Icon.grayStar,
      itemName: 'Gym T-Shirt',
      itemImg: Images.Pictures.airpods,
      ammount: ' $15.00',
      imgW: 70,
      imgH: 100,
      Press2: () =>
        navigation.navigate('ProductDetails', {
          Image1: Images.Pictures.airpods,
        }),
    },

    {
      color: Themes.boxColors.grayLite,
      text: 'old',
      img: Images.Icon.grayStar,
      itemName: 'Gym T-Shirt',
      itemImg: Images.Pictures.tShirt1,
      ammount: ' $15.00',
      imgW: 70,
      imgH: 100,
      Press2: () =>
        navigation.navigate('ProductDetails', {
          Image1: Images.Pictures.greenShoes,
        }),
    },
  ];

  // useEffect(() => {
  //   const backAction = () => {
  //     BackHandler.exitApp();

  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,

  //   );
  //    return () => backHandler.remove();
  // }, []);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar barStyle={'dark-content'} backgroundColor="white" animated />
        <View style={styles.Header}>
          <View style={styles.Headerpart1}>
            <TouchableOpacity
              style={styles.Headerpart1Content1}
              activeOpacity={0.8}
              onPress={() => {
                navigation.openDrawer();
              }}>
              <Image
                source={Images.Pictures.drawerLogo}
                style={styles.Headerpart1Content2}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.Headerpart2}>
            <View>
              <Image
                source={Images.Pictures.loginLogo}
                style={styles.Headerpart2Content1}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.Headerpart2Content2}>By</Text>
            <View>
              <Image
                source={Images.Pictures.homeHeaderText}
                style={styles.Headerpart2Content3}
                resizeMode="contain"
              />
            </View>
          </View>

          <View style={styles.Headerpart3}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('notification');
              }}
              style={styles.Headerpart3Content1}
              activeOpacity={0.8}>
              <Image
                source={Images.Pictures.notificationLogo}
                style={styles.Headerpart3Content2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Statics', {screen: 'profileSettings'});
              }}
              style={styles.Headerpart3Content3}
              activeOpacity={0.8}>
              <Image
                source={Images.Pictures.profile1}
                style={styles.Headerpart3Content3_1}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mainBody}>
          <LinearGradient
            colors={['#650E0D', '#CA1C1A']}
            style={styles.countLinearStyle}>
            <CountDown
              size={25}
              until={1000}
              onFinish={() => console.log('finished')}
              digitStyle={{}}
              digitTxtStyle={{color: 'white'}}
              //timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
              separatorStyle={{color: '#AF0010'}}
              timeToShow={['D', 'H', 'M', 'S']}
              timeLabels={{d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds'}}
              timeLabelStyle={styles.timeLabelStyle}
              showSeparator
            />
          </LinearGradient>

          <View style={{width: '100%', marginTop: 20}}>
            <TextWithLine
              Press={() => {
                navigation.navigate('FeaturedDeals');
              }}
              viewAllBtn
              left={0}
              text="Featured Deals"
              text2="View All"
            />
          </View>
          <View>
            <View style={styles.box1}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={data}
                horizontal={true}
                renderItem={({item}) => {
                  return (
                    <>
                      <Boxs
                        Bgcolor={item.color}
                        marginRight={10}
                        text={item.text}
                        icon={item.img}
                        itemImg={item.itemImg}
                        itemName={item.itemName}
                        amount={item.ammount}
                        imgHeight={item.imgH}
                        imgWidth={item.imgW}
                        StockNewOld
                        FeaturedDeals
                        Press={item.Press1}
                      />
                    </>
                  );
                }}
              />
            </View>
          </View>
          <View style={{width: '100%', marginTop: 10}}>
            <TextWithLine
              Press={() => {
                navigation.navigate('CatagoryScreen');
              }}
              viewAllBtn
              left={0}
              text="Deal Categories"
              text2="View All"
            />
          </View>
          <View style={styles.box2}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={data}
              horizontal={true}
              renderItem={({item}) => {
                return (
                  <Boxs
                    width={266}
                    height={283}
                    marginRight={20}
                    itemImg={item.itemImg}
                    DealCategories
                    text="Accessories"
                    text1="48 Products"
                    Press={item.Press2}
                  />
                );
              }}
            />
          </View>
          <View style={{marginTop: 10}}>
            <TextWithLine
              viewAllBtn
              Press={() => {
                navigation.navigate('CatagoryScreen');
              }}
              left={0}
              text="Active Deals"
              text2="View All"
            />
          </View>
          <View style={styles.box4}>
            {data2.map((item, index) => {
              return (
                <>
                  <Boxs
                    Bgcolor={item.color}
                    Press={item.Press2}
                    marginRight={10}
                    text={item.text}
                    icon={item.img}
                    itemImg={item.itemImg}
                    itemName={item.itemName}
                    amount={item.ammount}
                    imgHeight={item.imgH}
                    imgWidth={item.imgW}
                    StockNewOld
                    FeaturedDeals
                  />
                </>
              );
            })}
          </View>
          <ViewMore />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  screenContainer: {flex: 1},
  mainBody: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: 30,
  },
  Header: {
    width: '90%',
    alignSelf: 'center',
    height: 120,
    flexDirection: 'row',
    marginTop: 10,
  },

  Headerpart1: {
    width: '16%',
    height: '36%',
    marginTop: 10,
  },
  Headerpart2: {
    width: '55%',
    alignSelf: 'center',
    height: '60%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  Headerpart3: {
    width: '25%',
    height: '36%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  Headerpart1Content1: {width: 50, height: 50},
  Headerpart1Content2: {width: '100%', height: '100%'},
  Headerpart2Content1: {width: 108, height: 37, left: 20},
  Headerpart2Content2: {
    fontSize: 14,
    color: '#030303',
    fontWeight: 'bold',
    marginLeft: 28,
  },
  Headerpart2Content3: {
    width: 100,
    height: 41,
    marginLeft: 30,
    marginBottom: 5,
  },
  Headerpart3Content1: {
    marginRight: 10,
    width: 21,
    height: 29,
  },
  Headerpart3Content2: {width: '100%', height: '100%'},
  Headerpart3Content3: {
    width: 50,
    height: 50,
  },
  Headerpart3Content3_1: {width: '100%', height: '100%'},
  timeLabelStyle: {
    color: 'white',
    position: 'absolute',
    bottom: 0,
    fontSize: 10,
    color: '#ffffffff',
    opacity: 0.5,
  },
  countLinearStyle: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#AF0010',
    alignSelf: 'center',
    height: 65,
    elevation: 5,
  },
  box1: {
    width: '100%',
    marginTop: 20,
    height: 220,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box4: {
    flexDirection: 'row',
    marginLeft: -7,
    flexWrap: 'wrap',
    marginTop: 20,

    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    width: '100%',
    overflow: 'visible',
    marginTop: 40,
    height: 300,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
});
