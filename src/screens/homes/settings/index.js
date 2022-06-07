import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Settings = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={{color: 'black'}}>Settings Screen</Text>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
