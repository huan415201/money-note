import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen, ProfileScreen } from '../screens';
import { SCREEN_KEY } from '../utils';
import { CustomTabBar } from './partial';

type ScreenParamList = {
  Home: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator<ScreenParamList>();

const getTabBar = (props: BottomTabBarProps) => <CustomTabBar {...props} />;

const BottomTabs = () => (
  <Tab.Navigator
    tabBar={props => getTabBar(props)}
    screenOptions={{ headerShown: false }}>
    <Tab.Screen name={SCREEN_KEY.Home} component={HomeStack} />
    <Tab.Screen name={SCREEN_KEY.Profile} component={ProfileStack} />
  </Tab.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={SCREEN_KEY.Home}
      component={HomeScreen}
      options={{ title: 'Ghi Thu Chi', headerTitleAlign: 'center' }}
    />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={SCREEN_KEY.Profile}
      component={ProfileScreen}
      options={{ title: 'Profile', headerTitleAlign: 'center' }}
    />
  </Stack.Navigator>
);

const Navigator = () => (
  <NavigationContainer>
    <BottomTabs />
  </NavigationContainer>
);

export default Navigator;
