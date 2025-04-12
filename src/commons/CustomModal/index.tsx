import { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { styles } from './styles';

type CustomModalProps = {
  children: ReactNode;
  isVisible?: boolean;
  onClose?: () => void;
  containerStyle?: ViewStyle;
};

const CustomModal = ({
  children,
  isVisible,
  onClose,
  containerStyle,
}: CustomModalProps) => {
  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.modal}>
      <View style={[styles.container, containerStyle]}>{children}</View>
    </ReactNativeModal>
  );
};

export default CustomModal;
