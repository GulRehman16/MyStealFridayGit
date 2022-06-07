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
} from 'react-native';
import {Button, Card, Overlay} from 'react-native-elements';
import {Themes, Images} from '../../../constants';
import {
  Boxs,
  TextWithLine,
  data1,
  Header,
  ViewMore,
  Data,
} from '../../../components';
import {SafeAreaView} from 'react-native-safe-area-context';

const shirts = [
  {
    color: Themes.boxColors.grayLite,
    text: 'old',
    img: Images.Icon.grayStar,
    itemImg: Images.Pictures.tShirt2,
    itemName: 'Gym T-Shirt',
    ammount: ' $15.00',
    imgW: 65,
    imgH: 100,
    Image1: Images.Pictures.tShirt2,
    Press2: () =>
      navigation.navigate('ProductItem', {
        catagory: 'Shirt',
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
    itemImg: Images.Pictures.tShirt,
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
    itemImg: Images.Pictures.tShirt1,
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
    img: Images.Icon.greenStar,
    itemImg: Images.Pictures.tShirt1,
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
    img: Images.Icon.greenStar,
    itemImg: Images.Pictures.tShirt1,
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
        Image1: Images.Pictures.tShirt2,
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
        Image1: Images.Pictures.tShirt2,
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

const width = Dimensions.get('screen').width / 2 - 15;
const ProductItem = ({route, navigation, TopText}) => {
  console.log(route);
  const catagory = route?.params.catagory || 'Accessories';
  const {Image1} = route.params;

  const [data, setData] = useState(
    catagory == 'Shirt' ? shirts : catagory == 'Shoes' ? Shoes : Accessories,
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <View style={{marginTop: 10}}>
            <Header
              headerText
              leftIcon
              leftIconProps={() => {
                navigation.goBack();
              }}
            />
          </View>
          <View style={styles.ActiveText}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#000',
                fontSize: 20,
              }}>
              {catagory == 'Shirt'
                ? 'Shirts'
                : catagory == 'Shoes'
                ? 'Shoes'
                : catagory == 'Accessories'
                ? 'Accessories '
                : null}
            </Text>
            <View style={styles.box4}>
              {data.map((item, index) => {
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
          <View style={styles.catagoryView}></View>
          <ViewMore />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProductItem;

const styles = StyleSheet.create({
  CatagoriesText: {
    fontSize: 16,
  },
  catagoryTextSelected: {
    width: '100%',
    borderBottomColor: '#CD1C1B',
    borderBottomWidth: 3,
  },
  headerView: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 35,
  },
  header: {width: '90%', alignSelf: 'center'},

  ActiveText: {},

  cards: {
    marginHorizontal: 2,

    padding: 15,
    alignSelf: 'center',
    // justifyContent: 'space-between', alignSelf: 'center'
  },
  box4: {
    flexDirection: 'row',
    marginLeft: -7,
    flexWrap: 'wrap',
    marginTop: 20,

    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
