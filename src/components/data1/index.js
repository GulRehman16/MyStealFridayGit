

import React, { useState } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, StatusBar,
    ScrollView, SafeAreaView
} from 'react-native';
import { Themes, Images } from '../../constants';
import { Boxs } from '../../components';

const Data = ({ text, navigation }) => {

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
            Press2: () => navigation.navigate('ProductItem'),
            Press1: () => navigation.navigate('ProductDetails', {
                itemId: 86,
                otherParam: 'anything you want here',
                Image1: Images.Pictures.tShirt2
            })

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
            Press1: () => navigation.navigate('ProductDetails', {
                Image1: Images.Pictures.purpleShoes
            })
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
            Press1: () => navigation.navigate('ProductDetails', {
                Image1: Images.Pictures.headPhone
            })
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
            Press1: () => navigation.navigate('ProductDetails',
                {
                    Image1: Images.Pictures.greenShoes
                })
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
            Press1: () => navigation.navigate('ProductDetails', {

                Image1: Images.Pictures.tShirt1,

            })
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
            Press2: () => navigation.navigate('ProductDetails', {
                Image1: Images.Pictures.tShirt2
            })
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
            Press2: () => navigation.navigate('ProductDetails',

                {
                    Image1: Images.Pictures.purpleShoes
                }
            )
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
            Press2: () => navigation.navigate('ProductDetails',
                {
                    Image1: Images.Pictures.headPhone
                }
            )
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
            Press2: () => navigation.navigate('ProductDetails',
                {
                    Image1: Images.Pictures.greenShoes
                }
            )
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
            Press2: () => navigation.navigate('ProductDetails',
                {
                    Image1: Images.Pictures.airpods
                })
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
            Press2: () => navigation.navigate('ProductDetails',
                {
                    Image1: Images.Pictures.greenShoes
                })
        },
    ];

    return (
        <SafeAreaView style={styles.screenContainer}>
            <StatusBar
                backgroundColor={'transparent'}
                barStyle="dark-content"
                translucent={true}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>


                <View style={styles.box4}>
                    {data.map((item, index) => {
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


            </ScrollView>
        </SafeAreaView >
    )
}

export {
    Data
}
const styles = StyleSheet.create({
    screenContainer: { flex: 1, backgroundColor: '#F8F8F8' },


    // box2: {
    //     width: '100%',
    //     overflow: 'visible',
    //     marginTop: 40,
    //     height: 300,
    //     flexDirection: 'row',
    //     backgroundColor: 'transparent',
    // },
    box4: {
        width: 800,
        flexDirection: 'row',
        marginLeft: -7,
        flexWrap: 'wrap',
        marginTop: 20,
        backgroundColor: '#F8F8F8',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
