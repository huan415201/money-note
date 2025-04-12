import React from 'react';
import { View } from 'react-native';
import AddButton from './partial/AddButton';
import { styles } from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <AddButton />
    </View>
  );
};

export default HomeScreen;
