import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Images } from '../../constants';
import { AppButton } from '../appButton';
import { Icon } from 'native-base';






const Shoebox = ({ Image1, content1, content2, txt }) => {
    const [count, setCount] = useState(0);

    return (
        <View>
            <View style={styles.noticeBox}>

                <TouchableOpacity style={{
                    backgroundColor: '#AFABAB', width: 34, height: 35,
                    borderRadius: 50, position: 'absolute', top: -15, left: -5, justifyContent: 'center', alignItems: 'center'
                }}>
                    <Icon name='close' type='AntDesign'
                        style={{ fontSize: 20, color: 'white' }} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <View style={{ width: '30%', alignItems: 'center', }}>
                        <Image
                            source={Image1}
                            resizeMode="contain"
                            style={{ width: '100%', height: '100%' }} />
                    </View>
                    <View style={{ width: '80%', alignSelf: 'center' }}>


                        {content1 && (

                            <View style={{ marginLeft: 30 }}>
                                <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold', textAlign: 'left' }}>
                                    Nike Collections
                                </Text>
                                <Text style={{ marginLeft: 55, fontSize: 16, color: '#000', fontWeight: '300', }}>
                                    $15.99
                                </Text>
                                <View
                                    style={{
                                        paddingVertical: 10,
                                        width: '100%',
                                        marginRight: 0
                                    }}>
                                    <AppButton
                                        btnWidth={159}
                                        btnHeight={34}
                                        iconW={20.34}
                                        iconH={18.08}
                                        // label="send"
                                        icon2
                                        iconN={'shoppingcart'}
                                        iconT={'AntDesign'}

                                    />
                                </View>
                            </View>
                        )}
                        {content2 && (
                            <View style={{ marginLeft: 30 }}>

                                <View>
                                    <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold', textAlign: 'left' }}>
                                        Nike Collections
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 20, width: '40%', justifyContent: 'space-between' }}>

                                    <View>

                                        <Text style={{ fontSize: 16, color: '#000', fontWeight: '300', fontWeight: 'bold', color: '#000' }}>
                                            $15.99
                                        </Text>
                                    </View>
                                    <View style={{
                                        marginLeft: 10,
                                        width: 88, height: 26, borderWidth: 0.55, flexDirection: 'row', backgroundColor: '#fff',
                                        elevation: 2, borderRadius: 5, justifyContent: 'space-between'
                                    }}>
                                        <TouchableOpacity onPress={() => setCount(count - 1)}>
                                            <Text style={{ fontSize: 22, marginLeft: 5, fontWeight: 'bold', color: '#000' }}>-</Text>
                                        </TouchableOpacity>

                                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>{count}</Text>
                                        <TouchableOpacity onPress={() => setCount(count + 1)}>
                                            <Text style={{ fontSize: 18, marginRight: 5, fontWeight: 'bold', color: '#000' }}>+</Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                        )}
                    </View>
                </View>
            </View>
        </View>
    )
}

export { Shoebox }

const styles = StyleSheet.create({
    noticeBox: {

        width: '100%',
        height: 118,
        borderRadius: 10,
        backgroundColor: '#ffff',
        elevation: 5,
        marginTop: 30,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 12,
        },
        shadowOpacity: 0.75,
        shadowRadius: 4.84,

        elevation: 10,



    },
})