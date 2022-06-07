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
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../../components';

const PrivacyPolocy = props => {
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
                    <StatusBar
                        backgroundColor={'transparent'}
                        barStyle="dark-content"
                        translucent={true}
                    />
                    <View style={{ marginTop: 10 }}>
                        <View style={styles.mainBody}>
                            <View style={{ marginTop: 10 }}>
                                <Header
                                    imageWidth={199}
                                    imageHeight={60}
                                    headerText
                                    leftIcon
                                    leftIconProps={() => {
                                        props.navigation.goBack();
                                    }}
                                />
                            </View>
                            <View style={styles.noticeBox}>
                                <View>
                                    <Text style={{
                                        fontSize: 18, color: '#000', fontWeight: 'bold',
                                        marginVertical: 20
                                    }}>
                                        Privacy Policy
                                    </Text>
                                </View>
                                <View style={{}}>

                                </View>
                                <View style={{}}>
                                    <Text style={{ textAlign: 'left', fontSize: 12, color: '#000', fontWeight: 'bold', margin: 5 }}>
                                        OVWERVIEW
                                    </Text>
                                    <Text style={{ textAlign: 'left', fontSize: 12, color: '#000', margin: 5 }}>

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your
                                    </Text>
                                </View>
                                <View style={{}}>
                                    <Text style={{ textAlign: 'left', fontSize: 12, color: '#000', fontWeight: 'bold', margin: 5 }}>
                                        OVWERVIEW
                                    </Text>
                                    <Text style={{ textAlign: 'left', fontSize: 12, color: '#000', margin: 5 }}>

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your
                                    </Text>
                                </View>
                                <View style={{}}>
                                    <Text style={{ textAlign: 'left', fontSize: 12, color: '#000', fontWeight: 'bold', margin: 5 }}>
                                        OVWERVIEW
                                    </Text>
                                    <Text style={{ textAlign: 'left', fontSize: 12, color: '#000', margin: 5 }}>

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your
                                    </Text>
                                </View>
                                <View style={{}}>
                                    <Text style={{ textAlign: 'left', fontSize: 12, color: '#000', fontWeight: 'bold', margin: 5 }}>
                                        OVWERVIEW
                                    </Text>
                                    <Text style={{ textAlign: 'left', fontSize: 12, color: '#000', margin: 5 }}>

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your
                                    </Text>
                                </View>
                                <View style={{}}>
                                    <Text style={{ textAlign: 'left', fontSize: 12, color: '#000', fontWeight: 'bold', margin: 5 }}>
                                        OVWERVIEW
                                    </Text>
                                    <Text style={{ textAlign: 'left', fontSize: 12, color: '#000', margin: 5 }}>

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your
                                    </Text>
                                </View>
                                <View style={{}}>
                                    <Text style={{ textAlign: 'left', fontSize: 12, color: '#000', fontWeight: 'bold', margin: 5 }}>
                                        OVWERVIEW
                                    </Text>
                                    <Text style={{ textAlign: 'left', fontSize: 12, color: '#000', margin: 5 }}>

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your

                                        This website is operated by Hidden Sole. Throughout the site, the terms “we”, “us” and “our” refer to Hidden Sole. Hidden Sole offers this
                                        website, including all information, tools and services available from this site to you, the user,
                                        conditioned upon your
                                    </Text>
                                </View>

                            </View></View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default PrivacyPolocy;

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
        alignItems: 'center',
        padding: 10

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
