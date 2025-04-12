import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { COLORS, SCREEN_KEY } from 'src/utils';
import { styles } from './styles';

const getTabBarIcon = (route: string, isFocused: boolean) => {
  let iconName = 'notebook';
  if (route === SCREEN_KEY.Home) {
    iconName = 'notebook';
  } else if (route === SCREEN_KEY.Profile) {
    iconName = 'compass';
  }
  return (
    <Icon
      name={iconName}
      size={24}
      color={isFocused ? COLORS.primary : COLORS.grey}
    />
  );
};

const CustomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            key={route.name}
            onPress={onPress}
            style={styles.item}>
            {getTabBarIcon(route.name, isFocused)}
            <Text style={[styles.name, isFocused && styles.activeName]}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
