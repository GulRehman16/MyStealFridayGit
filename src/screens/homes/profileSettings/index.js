import {
  BackHandler,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Images} from '../../../constants';
import React, {useState, useEffect} from 'react';
import {Header} from '../../../components';

const ProfileSettings = ({navigation}) => {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'#F8F8F8'} barStyle="dark-content" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.mainBody}>
          <View style={{marginTop: 0}}>
            <Header
              headerText1
              leftIcon
              screenName1
              screenText1={'Profile Settings'}
              marginLeft={33}
              leftIconProps={() => {
                navigation.goBack();
              }}
            />
          </View>
          <View style={styles.btnView}>
            <TouchableOpacity
              style={styles.btnStyle}
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate('profileEdit');
              }}>
              <Text style={styles.btnText}>My Profile</Text>
              <Image source={Images.Icon.nextIcon} style={styles.nextIcon} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnStyle}
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate('notificationSetting');
              }}>
              <Text style={styles.btnText}>Notifications</Text>
              <Image source={Images.Icon.nextIcon} style={styles.nextIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnStyle}
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate('Statics', {screen: 'changePassword'});
              }}>
              <Text style={styles.btnText}>Change Password</Text>
              <Image source={Images.Icon.nextIcon} style={styles.nextIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileSettings;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingBottom: 40,
  },
  mainBody: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: 30,
  },
  btnView: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  btnStyle: {
    width: '100%',
    marginTop: 15,
    height: 57,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnText: {fontSize: 16, color: '#000000', marginLeft: 10},
  nextIcon: {width: 12.5, height: 22.62, marginRight: 10},
});
