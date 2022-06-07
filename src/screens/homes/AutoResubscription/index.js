import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Switch,
    StatusBar,
} from 'react-native';
import { Header } from '../../../components';
import { View, Text } from 'react-native';
import { Images } from '../../../constants';
import { Icon } from 'native-base';
import { useState } from 'react';
const SwitchComponent = ({ iconN, iconT, text, value, onSwitch }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View
            style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <View
                style={{
                    width: '75%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}>
                <View style={{ paddingLeft: 6 }}>
                    <Text style={{ color: '#323232', fontSize: 15 }}>{text}</Text>
                </View>
            </View>
            <View style={{ width: '20%' }}>
                <Switch
                    disabled={false}
                    value={isEnabled}
                    onValueChange={toggleSwitch}
                    onChange={onSwitch}
                    trackColor={{
                        true: '#E4201E',
                        false: '#C2C2C2',
                    }}
                    thumbColor={'#FFFFFF'}
                    size="lg"
                />
            </View>
            <View style={{ marginRight: 10 }}><Text style={{ fontSize: 16, fontWeight: 'bold', color: isEnabled ? 'black' : 'grey' }}>ON</Text></View>
        </View>
    );
};
const AutoResubscription = props => {
    const [state, setState] = useState({
        appNotification: true,
        email: false,
        device: false,
    });

    return (
        <>
            <SafeAreaView style={styles.screenContainer}>
                <StatusBar backgroundColor={'#F8F8F8'} barStyle="dark-content" />
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.mainBody}>
                        <View style={{ marginTop: 20 }}>
                            <Header
                                headerText1
                                leftIcon
                                screenName1
                                screenText1={'Auto Resubscription'}
                                marginLeft={33}
                                leftIconProps={() => {
                                    props.navigation.goBack();
                                }}
                            />
                        </View>

                        <View style={{ width: '100%', paddingTop: 30 }}>
                            <View style={{ marginVertical: 10 }}>
                                <SwitchComponent
                                    iconN="email-outline"
                                    iconT="MaterialCommunityIcons"
                                    text="Subscription Fee $19.99/month"
                                    value={state.appNotification}
                                    onSwitch={() =>
                                        setState({
                                            ...state,
                                            appNotification: !state.appNotification,
                                        })
                                    }
                                />
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default AutoResubscription;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },

    mainBody: {
        width: '90%',
        height: '100%',
        alignSelf: 'center',
        paddingBottom: 30,
    },
});
