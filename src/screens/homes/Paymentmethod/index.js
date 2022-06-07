import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { AppButton, Header, Overlays } from '../../../components';
import { Images } from '../../../constants';


const PaymentMethod = (props) => {
    const [visible, setVisible] = useState(false);
    const { onClose, closeModal, } = props
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <View style={{ flex: 1, }}>
                <ScrollView keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <StatusBar
                        backgroundColor={'transparent'}
                        barStyle="dark-content"
                        translucent={true}
                    />
                    <View style={{ width: '90%', height: '100%', alignSelf: 'center', marginVertical: 15, }}>
                        <View style={{ marginTop: 60 }}>
                            <Header leftIcon
                                leftIconProps={() => {
                                    props.navigation.goBack();
                                }}
                            />
                        </View>

                        <View style={{ width: '90%', marginTop: 30, alignSelf: 'center' }}>
                            <View style={{ marginVertical: 10, }}>
                                <Text style={{ color: '#000', fontWeight: '600', fontSize: 22, textAlign: 'center' }}>
                                    Payment Method</Text>
                                <View>
                                </View>
                                <View style={{ marginVertical: 10, }}>
                                    <Text style={{ color: '#000', fontSize: 14, textAlign: 'center' }}>
                                        Subscription Fee $19.99/month and it will auto re-subscribed. You can turn off auto re-subscription from settings
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginVertical: 10, borderBottomWidth: 1 }}>
                            <Text style={{ color: '#000', fontSize: 14, marginLeft: 4, }}>
                                Name On Card</Text>
                            <TextInput placeholder='Rabecca Spade' placeholderTextColor="#000" style={{
                                backgroundColor: 'transparent', color: '#000', fontSize: 14, fontWeight: 'bold'
                            }} />

                        </View>
                        <View style={{ marginVertical: 10, borderBottomWidth: 1 }}>
                            <Text style={{ color: '#000', fontSize: 14, marginLeft: 4, }}>
                                Card Number</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                <TextInput placeholder='4560 5674 3224 4543' placeholderTextColor="#000" style={{
                                    backgroundColor: 'transparent', fontWeight: 'bold', fontSize: 14, color: 'black',
                                }} />
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Image source={Images.Pictures.path70} />
                                    <Image source={Images.Pictures.Path69} />

                                </View>

                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ width: '40%', marginVertical: 10, borderBottomWidth: 1 }}>
                                <Text style={{ color: '#000', fontSize: 14, marginLeft: 4, }}>
                                    Expiry Date</Text>
                                <TextInput placeholder='09 / 18' placeholderTextColor="#000" style={{
                                    backgroundColor: 'transparent',
                                    fontWeight: 'bold', fontSize: 14, color: 'black',
                                }} />

                            </View>
                            <View style={{ width: '40%', marginVertical: 10, borderBottomWidth: 1 }}>
                                <Text style={{ color: '#000', fontSize: 14, marginLeft: 4, }}>
                                    CVV</Text>
                                <TextInput placeholder='667' placeholderTextColor="#000" style={{
                                    backgroundColor: 'transparent',
                                    fontWeight: 'bold', fontSize: 14, color: 'black',
                                }} />

                            </View>
                        </View>
                        <View style={{ alignSelf: 'center', marginTop: 30 }}>
                            <AppButton label="Pay Now" text btnWidth={180}
                                onPress={() => setVisible(!visible)} />

                            <View style={{ marginVertical: 5, alignSelf: 'center' }}>
                                <Text style={{ color: '#000', fontSize: 20 }}>
                                    - OR -
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => {

                            }} style={styles.btns} >
                                <Image source={Images.Pictures.paypal} />

                                <Text style={{ color: '#000', fontSize: 14 }}>
                                    Paypal
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView >
            </View >
            <Overlays popupcontent btnNotice TexView nestedbtn
                navigation={props.navigation}
                labletext="Close" visible={visible}
                toggleOverlay={() => setVisible(false)} />
        </>
    )
}

export default PaymentMethod

const styles = StyleSheet.create({
    btn: {
        width: 229, height: 66, borderRadius: 50, marginTop: 0, marginVertical: 10, marginTop: 50,
        backgroundColor: "#F52667", justifyContent: 'center', alignItems: 'center',
    },
    btns: {
        flexDirection: 'row',
        width: 180, height: 50, borderRadius: 50, marginTop: 0, marginVertical: 5,
        justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'
    }
})