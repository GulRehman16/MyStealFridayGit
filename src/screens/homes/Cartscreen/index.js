

import { Icon } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
    BackHandler,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton, Header, Shoebox } from '../../../components';
import { Images } from '../../../constants';

const CartScreen = props => {
    const isHome = props?.route?.params?.isHome || false;
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        LastName: '',
        email: '',
        messege: '',
    });

    const [state, setState] = useState({
        focus: false,
        secureText: true,
        secureText2: true,
        checked: false,
        checked2: false,
    });
    const [visible, setVisible] = useState(false);

    const backScreen = props?.route?.params?.backScreen;
    useEffect(() => {
        const backAction = () => {
            if (backScreen) {
                props.navigation.navigate('MyTabs', { screen: backScreen });
            } else {
                props.navigation.goBack();
            }

            return true;
        };
        let backHandler;
        props.navigation.addListener('focus', () => {
            backHandler = BackHandler.addEventListener(
                'hardwareBackPress',
                backAction,
            );
        });

        props.navigation.addListener('blur', () => {
            if (backHandler) {
                backHandler.remove();
            }
        });
    }, []);

    return (
        <>
            <SafeAreaView style={styles.screenContainer}>
                <StatusBar backgroundColor={'white'} barStyle="dark-content" />
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ marginTop: 5 }}>
                        <View style={styles.mainBody}>
                            <View style={{}}>
                                <Header

                                    headerText1
                                    leftIcon
                                    screenName1
                                    screenText1="Cart"
                                    leftIconProps={() => {
                                        props.navigation.goBack();
                                    }}
                                />
                            </View>
                            <View style={{ paddingVertical: 30 }}>

                                <View>
                                    <Shoebox content2 Image1={Images.Pictures.nikeShoe1} />
                                </View>
                                <View>
                                    <Shoebox content2 Image1={Images.Pictures.greenShoe1} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.footer}>
                            <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 16, color: '#000', fontWeight: '500', marginVertical: 5, marginTop: 10 }}>
                                    Price (3 items)
                                </Text>
                                <Text style={{ fontSize: 16, color: '#000', fontWeight: '500', marginVertical: 5, marginTop: 10 }}>
                                    Total: $265.99
                                </Text>
                            </View>
                            <View style={{ width: 214, marginVertical: 10, alignSelf: 'center', marginTop: 30 }}>
                                <AppButton
                                    onPress={() => { props.navigation.navigate('checkOut') }}
                                    label="Checkout" text />
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    mainBody: {
        width: '80%',
        height: '100%',
        alignSelf: 'center',
        paddingBottom: 140,
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
    footer: {
        position: 'absolute', bottom: 0, width: '100%', height: 146, elevation: 5,
        backgroundColor: '#fff', borderTopStartRadius: 50, borderTopEndRadius: 50,
        justifyContent: 'flex-end',
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 12,
        },
        shadowOpacity: 0.75,
        shadowRadius: 4.84,
        elevation: 10,
    }

});
