import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const TabBar = props => {
  const {state} = props;
  const tabs = [
    {text: 'Home', navTo: 'home', iconN: '', iconT: ''},
    {text: 'Profile', navTo: 'profile', iconN: '', iconT: ''},
    {text: 'Settings', navTo: 'settings', iconN: '', iconT: ''},
  ];

  return (
    <SafeAreaView style={styles.tabBarContainer}>
      {tabs.map((item, i) => (
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(item.navTo);
          }}
          key={i}
          style={{
            width: '28%',
            justifyContent: 'center',
            alignItems: 'center',
            height: '70%',
            borderRadius: 7,
          }}>
          <Text style={{color: state.index === i ? 'white' : '#D3D3D3'}}>
            {item.text}
          </Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

export {TabBar};

const styles = StyleSheet.create({
  tabBarContainer: {
    width: '100%',
    height: 60,
    backgroundColor: 'teal',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
