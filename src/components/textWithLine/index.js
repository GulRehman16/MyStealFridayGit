import {Icon} from 'native-base';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const TextWithLine = ({
  text,
  text2,
  left,
  right,
  fontSize,
  fontWeight,
  lineColor,
  viewAllBtn,
  backgroundColor,
  Press,
}) => {
  return (
    <>
      <View
        style={{
          width: '100%',
          height: 25,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
          flexDirection: 'row',
          backgroundColor: backgroundColor || null,
        }}>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: lineColor || 'grey',
            alignItems: 'center',
          }}>
          <View
            style={{
              position: 'absolute',
              top: -13,
              height: 25,
              left: left,
              right: right,
              overflow: 'hidden',
              backgroundColor: backgroundColor || '#f2f0f0',
              paddingHorizontal: 10,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: fontSize || 16,
                color: '#030303',
                fontWeight: fontWeight || '600',
              }}>
              {text}
            </Text>
          </View>
          {viewAllBtn && (
            <TouchableOpacity
              onPress={Press}
              style={{
                position: 'absolute',
                top: -13,
                height: 25,
                right: 0,
                overflow: 'hidden',
                backgroundColor: '#f2f0f0',
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}
              activeOpacity={0.9}>
              <Text
                style={{
                  fontSize: fontSize || 14,
                  color: '#CD1C1B',
                  fontWeight: fontWeight || 'bold',
                }}>
                {text2}
              </Text>

              <Icon
                name="arrow-right"
                type="FontAwesome"
                style={{
                  color: '#CD1C1B',
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginLeft: 5,
                }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

export {TextWithLine};
