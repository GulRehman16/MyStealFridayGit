import React from 'react';
import {StackActions, NavigationActions} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import splash from '../../screens/auth/splash';
import login from '../../screens/auth/login';
import home from '../../screens/homes/home';
import signup from '../../screens/auth/signup';
import mainAuth from '../../screens/auth/mainAuth';
import MyDrawer from '../Drawer';
import Notification from '../../screens/homes/notification';
import ProfileSettings from '../../screens/homes/profileSettings';
import ProfileEdit from '../../screens/homes/profileEdit';
import NotificationSettings from '../../screens/homes/notificationSetting';
import ChangePassword from '../../screens/auth/changePassword';
import ForgetPassword from '../../screens/auth/forgetPassword';
import ForgetPasswordOtp from '../../screens/auth/forgetPasswordOtp';
import AutoResubscription from '../../screens/homes/AutoResubscription';
import PrivacyPolocy from '../../screens/homes/PrivacyPolicy';
import Favorites from '../../screens/homes/Favorites';
import CartScreen from '../../screens/homes/Cartscreen';
import ProductDetails from '../../screens/homes/ProductDetails';
import PaymentMethod from '../../screens/homes/Paymentmethod';
import Adeals from '../../screens/homes/Adeals';
import MyOrder from '../../screens/homes/MyOrder';
import FeaturedDeals from '../../screens/homes/Featured Deals';
import CreateNewPassWord from '../../screens/auth/CreateNewPassword';
import CheckOut from '../../screens/homes/checkout';
import Summary from '../../screens/homes/Summary';
import ProductItem from '../../screens/homes/ProductItem';
import CongratesPage from '../../screens/homes/CongratesPage';
import ContactUs from '../../screens/homes/contactUs';
import CatagoryScreen from '../../screens/homes/CatagoryScreen';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="splash"
        component={splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        component={signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="forgetPasswordOtp"
        component={ForgetPasswordOtp}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="CreateNewPassWord"
        component={CreateNewPassWord}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="mainAuth"
        component={mainAuth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="forgetPassword"
        component={ForgetPassword}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Statics = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profileSettings"
        component={ProfileSettings}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="changePassword"
        component={ChangePassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="notificationSetting"
        component={NotificationSettings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="home"
        component={home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export const Homes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Summary"
        component={Summary}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="CongratesPage"
        component={CongratesPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CatagoryScreen"
        component={CatagoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyOrder"
        component={MyOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductItem"
        component={ProductItem}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FeaturedDeals"
        component={FeaturedDeals}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="notification"
        component={Notification}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Adeals"
        component={Adeals}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="checkOut"
        component={CheckOut}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="PrivacyPolocy"
        component={PrivacyPolocy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="autoResubscription"
        component={AutoResubscription}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="profileEdit"
        component={ProfileEdit}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Homes"
          component={Homes}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Statics"
          component={Statics}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
