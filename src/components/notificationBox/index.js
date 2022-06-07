import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const NotificationBox = ({image, title, timing}) => {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: 81,
        elevation: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        justifyContent: 'center',
      }}
      activeOpacity={0.9}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'center',
          height: 52,
        }}>
        <View style={{width: '30%', height: '100%'}}>
          <Image
            resizeMode="stretch"
            source={image}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View
          style={{
            width: '70%',
            height: '100%',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 18, color: '#191818', textAlign: 'center'}}>
            {title}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              color: '#191818',
              opacity: 0.5,
            }}>
            {timing}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export {NotificationBox};

const styles = StyleSheet.create({});
