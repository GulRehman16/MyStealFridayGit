import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import {Button, Card, Overlay} from 'react-native-elements';
import {Themes, Images} from '../../../constants';
import {Boxs, TextWithLine, data1, Header, ViewMore} from '../../../components';
import {SafeAreaView} from 'react-native-safe-area-context';

const width = Dimensions.get('screen').width / 2 - 15;
const Adeals = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const Catagories = ['Name1', 'Name2', 'Name3', 'Name4'];
  const [catagoryIndex, setCatagoryIndex] = useState(0);

  const CatagoryList = props => {
    return (
      <View
        style={{
          width: '70%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
          marginBottom: 10,
          alignSelf: 'center',
        }}>
        <TouchableOpacity onPress={() => setCatagoryIndex(0)}>
          <Text
            style={[
              styles.CatagoriesText,
              catagoryIndex == 0 && styles.catagoryTextSelected,
            ]}>
            Clothing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCatagoryIndex(1)}>
          <Text
            style={[
              styles.CatagoriesText,
              catagoryIndex == 1 && styles.catagoryTextSelected,
            ]}>
            Shoes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCatagoryIndex(2)}>
          <Text
            style={[
              styles.CatagoriesText,
              catagoryIndex == 2 && styles.catagoryTextSelected,
            ]}>
            Accessories
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const shirts = [
    {
      color: Themes.boxColors.grayLite,
      text: 'old',
      img: Images.Icon.grayStar,
      itemImg: Images.Pictures.tShirt,
      itemName: 'Gym T-Shirt',
      ammount: ' $15.00',
      imgW: 65,
      imgH: 100,
      Image1: Images.Pictures.tShirt,
      Press2: () =>
        navigation.navigate('ProductItem', {
          catagory: 'Shirt',
        }),
      Press1: () =>
        navigation.navigate('ProductDetails', {
          Image1: Images.Pictures.tShirt2,
        }),
    },
    {
      color: Themes.boxColors.purpulLite,
      text: 'old',
      img: Images.Icon.purpleStar,
      itemImg: Images.Pictures.tShirt2,

      ammount: ' $15.00',
      itemName: 'Nike Collection',
      imgW: 75,
      imgH: 80,
      Press2: () =>
        navigation.navigate('ProductItem', {
          catagory: 'Shirt',
        }),
      Press1: () =>
        navigation.navigate('ProductDetails', {
          Image1: Images.Pictures.tShirt2,
        }),
    },
    {
      color: Themes.boxColors.blueLite,
      text: 'New',
      itemName: 'Beats Up HeadSet',
      img: Images.Icon.star1,
      itemImg: Images.Pictures.tShirt2,
      ammount: ' $15.00',
      imgW: 65,
      imgH: 65,
      Press2: () =>
        navigation.navigate('ProductItem', {
          catagory: 'Shirt',
        }),
      Press1: () =>
        navigation.navigate('ProductDetails', {
          Image1: Images.Pictures.tShirt2,
        }),
    },
    {
      img: Images.Icon.greenStar,
      itemImg: Images.Pictures.tShirt1,
      color: Themes.boxColors.greenLite,
      text: 'New',
      ammount: ' $15.00',
      itemName: 'Nike Collection',
      imgW: 60,
      imgH: 65,
      Press2: () =>
        navigation.navigate('ProductItem', {
          catagory: 'Shirt',
        }),
      Press1: () =>
        navigation.navigate('ProductDetails', {
          Image1: Images.Pictures.tShirt1,
        }),
    },
    {
      img: Images.Icon.greenStar,
      itemImg: Images.Pictures.tShirt1,
      color: Themes.boxColors.greenLite,
      text: 'New',
      ammount: ' $15.00',
      itemName: 'Nike Collection',
      imgW: 60,
      imgH: 65,
      Press2: () =>
        navigation.navigate('ProductItem', {
          catagory: 'Shirt',
        }),
      Press1: () =>
        navigation.navigate('ProductDetails', {
          Image1: Images.Pictures.tShirt1,
        }),
    },
    {
      img: Images.Icon.greenStar,
      itemImg: Images.Pictures.tShirt1,
      color: Themes.boxColors.greenLite,
      text: 'New',
      ammount: ' $15.00',
      itemName: 'Nike Collection',
      imgW: 60,
      imgH: 65,
      Press2: () =>
        navigation.navigate('ProductItem', {
          catagory: 'Shirt',
        }),
      Press1: () =>
        navigation.navigate('ProductDetails', {
          Image1: Images.Pictures.tShirt1,
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
          catagory: 'Shirt',
        }),
      Press1: () =>
        navigation.navigate('ProductDetails', {
          Image1: Images.Pictures.tShirt1,
        }),
    },
  ];
  const Shoes = [
    {
      color: Themes.boxColors.grayLite,
      text: 'old',
      img: Images.Icon.grayStar,
      itemImg: Images.Pictures.greenShoe1,
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
          Image1: Images.Pictures.greenShoe1,
        }),
    },
    {
      color: Themes.boxColors.grayLite,
      text: 'old',
      img: Images.Icon.grayStar,
      itemImg: Images.Pictures.greenShoe1,
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
          Image1: Images.Pictures.greenShoes,
        }),
    },
    {
      color: Themes.boxColors.grayLite,
      text: 'old',
      img: Images.Icon.grayStar,
      itemImg: Images.Pictures.blackShoes,
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
          Image1: Images.Pictures.blackShoes,
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
      itemImg: Images.Pictures.blackShoes,
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
      itemImg: Images.Pictures.greenShoes,
      color: Themes.boxColors.greenLite,
      text: 'New',
      ammount: ' $15.00',
      itemName: 'Nike Collection',
      imgW: 60,
      imgH: 65,
      Press1: () =>
        navigation.navigate('ProductDetails', {
          Image1: Images.Pictures.purpleShoes,
        }),
    },

    {
      color: Themes.boxColors.grayLite,
      text: 'old',
      img: Images.Icon.grayStar,
      itemName: 'Gym T-Shirt',
      itemImg: Images.Pictures.purpleShoes,
      ammount: ' $15.00',
      imgW: 70,
      imgH: 100,
      Press1: () =>
        navigation.navigate('ProductDetails', {
          Image1: Images.Pictures.purpleShoes,
        }),
    },
  ];
  const Accessories = [
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
      itemImg: Images.Pictures.airpods,
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
      itemImg: Images.Pictures.headfone,
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
      itemImg: Images.Pictures.airpods,
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
    <SafeAreaView style={{}}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar backgroundColor={'#F8F8F8'} barStyle="dark-content" />
        <View>
          <View style={{width: '100%', alignSelf: 'center'}}>
            <View style={{width: '90%', alignSelf: 'center'}}>
              <View style={{marginTop: 5}}>
                <Header
                  headerText1
                  leftIcon
                  leftIconProps={() => {
                    navigation.goBack();
                  }}
                />
              </View>
            </View>
            <View style={styles.DealsView}>
              <Text style={styles.DealsText}>Active Deals</Text>
            </View>
          </View>
          <View style={styles.catagoryView}>
            <CatagoryList />
            <View style={{marginTop: 10}}>
              <View style={styles.box4}>
                {catagoryIndex == 0 ? (
                  <View style={styles.box4}>
                    {shirts.map((item, index) => {
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
                ) : null}
                {catagoryIndex == 1 ? (
                  <View style={styles.box4}>
                    {Shoes.map((item, index) => {
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
                ) : null}
                {catagoryIndex == 2 ? (
                  <View style={styles.box4}>
                    {Accessories.map((item, index) => {
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
                ) : null}
              </View>
            </View>
          </View>
          <ViewMore />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Adeals;

const styles = StyleSheet.create({
  CatagoriesText: {
    fontSize: 16,
  },
  catagoryTextSelected: {
    width: '100%',
    borderBottomColor: '#CD1C1B',
    borderBottomWidth: 3,
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#E4201E',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 45,
    alignSelf: 'flex-end',
  },
  DealsView: {alignItems: 'center', width: '90%', alignSelf: 'center'},
  DealsText: {fontSize: 22, fontWeight: '700', color: 'black'},
  header: {width: '90%', alignSelf: 'center'},

  ActiveText1: {
    fontSize: 22,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
  },

  cards: {
    // marginHorizontal: 2,
    // padding: 15,
    // alignSelf: 'center',
    // justifyContent: 'space-between', alignSelf: 'center'
  },
  box4: {
    flexDirection: 'row',
    marginLeft: -7,
    flexWrap: 'wrap',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
