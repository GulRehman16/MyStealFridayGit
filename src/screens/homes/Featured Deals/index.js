import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar,
  BackHandler,
} from 'react-native';
import {Button, Card, Overlay} from 'react-native-elements';
import {Themes, Images} from '../../../constants';
import {Boxs, Header, Overlays, ViewMore} from '../../../components';

const width = Dimensions.get('screen').width / 2 - 15;
const FeaturedDeals = ({navigation}) => {
  //   useEffect(() => {
  //     const backAction = () => {
  //       navigation.goBack();

  //       return true;
  //     };

  //     const backHandler = BackHandler.addEventListener(
  //       'hardwareBackPress',
  //       backAction,
  //     );
  //   }, []);

  const [visible, setVisible] = useState(false);

  const data1 = [
    {
      color: Themes.boxColors.grayLite,
      text: 'old',
      img: Images.Icon.grayStar,
      itemImg: Images.Pictures.airpods,
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
      color: Themes.boxColors.grayLite,
      text: 'old',
      img: Images.Icon.grayStar,
      itemImg: Images.Pictures.headPhone,
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
      Press1: () =>
        navigation.navigate('ProductDetails', {
          Image1: Images.Pictures.headPhone,
        }),
    },
    {
      img: Images.Icon.greenStar,
      itemImg: Images.Pictures.tShirt,
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
      itemImg: Images.Pictures.tShirt2,
      ammount: ' $15.00',
      imgW: 70,
      imgH: 100,
      Press1: () =>
        navigation.navigate('ProductDetails', {
          Image1: Images.Pictures.tShirt1,
        }),
    },
  ];

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          backgroundColor="#F8F8F8"
          barStyle="dark-content"
          translucent={false}
        />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{}}>
            <View>
              <View style={{width: '100%', alignSelf: 'center'}}>
                <View style={{width: '90%', alignSelf: 'center'}}>
                  <View style={{marginTop: 10}}>
                    <Header
                      headerText1
                      leftIcon
                      leftIconProps={() => {
                        navigation.goBack();
                      }}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => setVisible(!visible)}
                    style={styles.headerIcon}>
                    <Image source={Images.Icon.Filter} />
                  </TouchableOpacity>
                </View>

                <View style={styles.FeaturedDealsView}>
                  <Text style={styles.FeaturedDealsText}>Featured Deals</Text>
                </View>
              </View>

              <View style={styles.ActiveText}>
                <View style={styles.box4}>
                  {data1.map((item, index) => {
                    return (
                      <>
                        <Boxs
                          Bgcolor={item.color}
                          Press={() =>
                            navigation.navigate('ProductDetails', {
                              Image1: item.itemImg,
                            })
                          }
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
              </View>
            </View>
            <ViewMore />
          </View>
        </ScrollView>
      </SafeAreaView>
      <Overlays
        popupcontent2
        visible={visible}
        toggleOverlay={() => setVisible(false)}
      />
    </>
  );
};

<View>
  <Overlay />
</View>;
export default FeaturedDeals;
const styles = StyleSheet.create({
  CatagoriesText: {
    fontSize: 16,
  },
  catagoryTextSelected: {
    width: '100%',
    borderBottomColor: '#CD1C1B',
    borderBottomWidth: 3,
  },

  cards: {
    marginHorizontal: 2,
    padding: 15,
    alignSelf: 'center',
    // justifyContent: 'space-between', alignSelf: 'center'
  },
  box4: {
    width: '100%',
    flexDirection: 'row',
    // flexWrap: 'wrap',
    // width,

    // alignItems: 'center',
    // justifyContent: 'center',
    // alignSelf: 'center'
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#E4201E',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    alignSelf: 'flex-end',
  },
  FeaturedDealsView: {alignItems: 'center', width: '90%', alignSelf: 'center'},
  FeaturedDealsText: {fontSize: 22, fontWeight: '700', color: 'black'},
  box4: {
    flexDirection: 'row',
    marginLeft: -7,
    flexWrap: 'wrap',
    marginTop: 20,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
