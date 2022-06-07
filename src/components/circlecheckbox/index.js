import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { CheckBox, Icon } from 'react-native-elements';


const CircleCheckBox = ({ text, Press }) => {
    const [visible, setVisible] = useState(false);
    const [check, setCheck] = useState(false);
    return (
        <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity onPress={() => setVisible(!visible)} style={{ flexDirection: 'row', }}>

                <CheckBox
                    // center
                    checkedIcon={
                        <Icon
                            name="radio-button-checked"
                            type="material"
                            color="red"
                            size={25}
                            iconStyle={{ marginRight: 10 }}
                        />
                    }
                    uncheckedIcon={
                        <Icon
                            name="radio-button-unchecked"
                            type="material"
                            color="grey"
                            size={20}
                            iconStyle={{ marginRight: 10 }}
                        />
                    }
                    checked={check}
                    onPress={() => setCheck(!check)}
                />
                <View style={{ justifyContent: 'center', }}>
                    <Text style={{ fontSize: 16, color: 'black', marginRight: 15 }}>{text}</Text>

                </View>
            </TouchableOpacity>
        </View>
    )
}

export { CircleCheckBox }

const styles = StyleSheet.create({})