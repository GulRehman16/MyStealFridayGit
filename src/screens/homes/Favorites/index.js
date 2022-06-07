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

const Favorites = props => {
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
                                    leftIconProps={() => {
                                        props.navigation.goBack();
                                    }}
                                />
                            </View>
                            <View style={{ paddingVertical: 30 }}>
                                <View style={{ alignSelf: 'center' }}>
                                    <Text style={{
                                        fontSize: 22,
                                        color: '#000',
                                        fontWeight: 'bold',
                                        marginVertical: 5,
                                        marginTop: 10
                                    }}>
                                        Favorites
                                    </Text>
                                </View>
                                <View style={{}}>
                                    <Shoebox content1 Image1={Images.Pictures.nikeShoe1} />
                                </View>
                                <View>
                                    <Shoebox content1 Image1={Images.Pictures.greenShoe1} />
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => { props.navigation.navigate('CartScreen') }}
                                style={{ marginTop: 220, elevation: 5, alignItems: 'center', justifyContent: 'center', width: '100%', height: 50, borderRadius: 50, backgroundColor: '#E4201E', backgroundColor: 'red', flexDirection: 'row' }}>

                                <Icon name='shoppingcart' type='AntDesign' style={{ fontSize: 20, color: 'white' }} />
                                <Text style={{ color: 'white', paddingLeft: 10 }}>My Cart</Text>
                            </TouchableOpacity>


                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default Favorites;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    mainBody: {
        width: '80%',
        height: '100%',
        alignSelf: 'center',
        paddingBottom: 30,
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
