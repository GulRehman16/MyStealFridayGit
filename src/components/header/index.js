import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  headerText1,
} from 'react-native';
import React from 'react';
import {Icon} from 'native-base';
import {Images} from '../../constants';
import {ICON_SIZE} from 'react-native-paper/lib/typescript/components/TextInput/Adornment/TextInputIcon';

const Header = ({
  fontColor,
  viewHeight,
  width,
  fontSize,
  leftIcon,
  RightIcon,
  text,
  leftIconProps,
  headerText,
  headerText1,

  screenName,
  screenName1,
  screenText,
  screenText1,
  marginLeft,
  imageHeight,
  imageWidth,

  IconColor,
  RICon,
  RICon2,
  RightIconPress,
  txtwidth,
  textColor,
  lIconClr,
  marginTop1,
  colorT,
}) => {
  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {leftIcon && (
          <TouchableOpacity
            activeOpacity={0.7}
            style={{position: 'absolute', left: 0}}
            onPress={leftIconProps}>
            <Icon
              name="arrowleft"
              type="AntDesign"
              style={{fontSize: 18, color: IconColor || '#000'}}
            />
          </TouchableOpacity>
        )}

        {headerText && (
          <View>
            <Image
              source={Images.Pictures.loginLogo}
              style={{
                width: imageWidth || 108,
                height: imageHeight || 37,
                marginLeft: 10,
              }}
              resizeMode="contain"
            />
          </View>
        )}
        {headerText1 && (
          <View>
            <Image
              source={Images.Pictures.loginLogo}
              style={{
                width: txtwidth || 108,
                height: 37,
              }}
              resizeMode="contain"
            />
          </View>
        )}
      </View>

      {screenName1 && (
        <View
          style={{
            alignSelf: 'center',
          }}>
          <Text
            style={{
              marginTop: marginTop1 || 30,
              marginVertical: marginTop1 || 20,
              fontWeight: '600',
              fontSize: 22,
              color: 'black',
              textAlign: 'center',
              color: colorT || '#000',
            }}>
            {screenText1}
          </Text>
        </View>
      )}

      {text && (
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
            color: 'white',
            marginTop: 20,
          }}>
          Checkout
        </Text>
      )}
      {screenName && (
        <View
          style={{
            marginTop: 20,
            alignSelf: 'center',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginLeft: marginLeft || 0,
              fontWeight: '600',
              fontSize: 22,
              color: 'black',
              textAlign: 'center',
            }}>
            {screenText}
          </Text>
        </View>
      )}
      {RightIcon && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={{position: 'absolute', right: 0}}
          onPress={RightIconPress}>
          {RICon && (
            <Image
              source={Images.Pictures.headericon1}
              style={{width: 26, height: 26, marginTop: 20}}
            />
          )}
          {RICon2 && <Icon name="cross" type="Entypo" />}
        </TouchableOpacity>
      )}
    </>
  );
};

export {Header};

const styles = StyleSheet.create({});
