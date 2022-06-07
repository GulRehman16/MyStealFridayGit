import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  BackHandler,
} from 'react-native';
import {Images} from '../../../constants';
import React, {useEffect} from 'react';
import {
  Header,
  NotificationBox,
  TextWithLine,
  ViewMore,
} from '../../../components';

const Notification = props => {
  // useEffect(() => {
  //   const backAction = () => {
  //     props.navigation.goBack();

  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );
  // }, []);
  const noticationData = [
    {
      itemImg: Images.Pictures.nikeShoes,
      itemText: 'New Nike Shoe Added',
      itemDate: 'Yesterday -10:00 Pm',
    },
    {
      itemImg: Images.Pictures.headfone,
      itemText: 'New Headphone Added',
      itemDate: 'Yesterday -10:00 Pm',
    },
    {
      itemImg: Images.Pictures.tShirt,
      itemText: 'New T-Shirt Added',
      itemDate: 'Yesterday -10:00 Pm',
    },
    {
      itemImg: Images.Pictures.orangeShoes,
      itemText: 'New Nike Shoe Added',
      itemDate: 'Yesterday -10:00 Pm',
    },
    {
      itemImg: Images.Pictures.blackHeadfone,
      itemText: 'New Headphone Added',
      itemDate: 'Yesterday -10:00 Pm',
    },
    {
      itemImg: Images.Pictures.blackShoes,
      itemText: 'New Nike Shoe Added',
      itemDate: 'Yesterday -10:00 Pm',
    },
    {
      itemImg: Images.Pictures.tShirt,
      itemText: 'New T-Shirt Added',
      itemDate: 'Yesterday -10:00 Pm',
    },
  ];
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'#F8F8F8'} barStyle="dark-content" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar
          backgroundColor={'white'}
          barStyle="dark-content"
          translucent={true}
        />
        <View style={styles.mainBody}>
          <View style={{marginTop: 40}}>
            <Header
              headerText1
              leftIcon
              screenName1
              screenText1={'Notifications'}
              marginLeft={33}
              leftIconProps={() => {
                props.navigation.goBack();
              }}
            />
          </View>
          <View style={{width: '110%'}}>
            <TextWithLine
              text={'New Notication'}
              left={0}
              backgroundColor={'#F8F8F8'}
            />
          </View>

          <View style={{marginTop: 10, width: '100%'}}>
            {noticationData.map((item, index) => {
              return (
                <View style={{marginTop: 10}}>
                  {index === 3 ? (
                    <>
                      <View style={{width: '110%'}}>
                        <TextWithLine
                          backgroundColor={'#F8F8F8'}
                          text={'Previous Notification'}
                          left={0}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <NotificationBox
                          image={item.itemImg}
                          title={item.itemText}
                          timing={item.itemDate}
                        />
                      </View>
                    </>
                  ) : (
                    <NotificationBox
                      image={item.itemImg}
                      title={item.itemText}
                      timing={item.itemDate}
                    />
                  )}
                </View>
              );
            })}

            <ViewMore />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;

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
});
