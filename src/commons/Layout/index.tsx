import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useInitData } from '../../hooks';
import { styles } from './styles';

const Layout = ({ children }: PropsWithChildren) => {
  useInitData();

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.container}>
      {children}
    </SafeAreaView>
  );
};

export default Layout;
