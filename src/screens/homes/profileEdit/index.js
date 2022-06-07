import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';
import {Images} from '../../../constants';
import {AppButton, FormInput, Header} from '../../../components';

const ProfileEdit = props => {
  const Catagories = ['Name1', 'Name2', 'Name3', 'Name4'];
  const [catagoryIndex, setCatagoryIndex] = useState(0);

  const CatagoryList = () => {
    return (
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
          marginBottom: 20,
        }}>
        {Catagories.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setCatagoryIndex(index)}>
            <Text
              style={[
                styles.CatagoriesText,
                catagoryIndex == index && styles.catagoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  return (
    <>
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar backgroundColor={'#F8F8F8'} barStyle="dark-content" />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{marginTop: 10}}>
            <View style={styles.mainBody}>
              <View style={{marginTop: 0}}>
                <Header
                  headerText1
                  leftIcon
                  leftIconProps={() => {
                    props.navigation.goBack();
                  }}
                />
              </View>

              <View style={styles.profileView}>
                <ImageBackground
                  resizeMode="contain"
                  source={Images.Pictures.profile1}
                  style={{width: 116, height: 119}}>
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      top: -4,
                      right: -15,
                    }}
                    activeOpacity={0.8}>
                    <View style={styles.iconCamera}>
                      <Image
                        source={Images.Icon.openCamera}
                        style={{width: 51, height: 53}}
                      />
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
              <View style={styles.mainContainer}>
                <View
                  style={{
                    borderBottomColor: '#BCBCBC',
                    borderBottomWidth: 2,
                  }}>
                  <FormInput
                    placeHolder="JONE"
                    placeHolderColor={'black'}
                    iconColor={'black'}
                    iconLName="user"
                    iconLType="AntDesign"
                    iconR
                    iconRName="edit"
                    iconRType="AntDesign"
                    iconL
                  />
                </View>
                <View
                  style={{
                    borderBottomColor: '#BCBCBC',
                    marginTop: 35,
                    borderBottomWidth: 2,
                  }}>
                  <FormInput
                    placeHolder="SMITH"
                    placeHolderColor={'black'}
                    iconColor={'black'}
                    iconLName="user"
                    iconLType="AntDesign"
                    iconR
                    iconRName="edit"
                    iconRType="AntDesign"
                    iconL
                  />
                </View>
                <View
                  style={{
                    borderBottomColor: '#BCBCBC',
                    marginTop: 35,
                    borderBottomWidth: 2,
                  }}>
                  <FormInput
                    placeHolder="johnsmith@gmail.com"
                    placeHolderColor={'black'}
                    iconColor={'black'}
                    iconLName="mail"
                    iconLType="AntDesign"
                    iconL
                  />
                </View>

                <View
                  style={{
                    borderBottomColor: '#BCBCBC',
                    marginTop: 35,
                    borderBottomWidth: 2,
                  }}>
                  <FormInput
                    keyboardType={'numeric'}
                    placeHolder="+1463839738093"
                    placeHolderColor={'black'}
                    iconColor={'black'}
                    iconLName="phone"
                    iconLType="Feather"
                    iconR
                    iconRName="edit"
                    iconRType="AntDesign"
                    iconL
                  />
                </View>

                <View
                  style={{
                    width: '60%',
                    alignSelf: 'center',
                    marginTop: 35,
                  }}>
                  <View
                    style={{
                      paddingVertical: 20,
                      width: '100%',
                      alignItems: 'center',
                      elevation: 5,
                    }}>
                    <AppButton
                      btnWidth={180}
                      label="Update"
                      text
                      onPress={() => {}}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ProfileEdit;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  mainBody: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: 30,
  },
  profileView: {
    width: 140,
    height: 140,
    marginLeft: 35,
    marginTop: 40,
    alignSelf: 'center',
  },
  mainContainer: {
    width: '80%',
    alignSelf: 'center',
  },
});
