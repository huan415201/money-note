import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen } from '../screens';
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
  <Tab.Navigator tabBar={props => getTabBar(props)}>
    <Tab.Screen
      name={SCREEN_KEY.Home}
      component={HomeStack}
      options={{ title: 'Ghi Thu Chi' }}
    />
    <Tab.Screen
      name={SCREEN_KEY.Profile}
      component={ProfileStack}
      options={{ title: 'Profile' }}
    />
  </Tab.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREEN_KEY.Home} component={HomeScreen} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREEN_KEY.Profile} component={HomeScreen} />
  </Stack.Navigator>
);

const Navigator = () => (
  <NavigationContainer>
    <BottomTabs />
  </NavigationContainer>
);

export default Navigator;
