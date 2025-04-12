import { Text } from 'react-native';
import { CustomModal } from 'src/commons';
import { styles } from './styles';

type CategoryModalProps = {
  isVisible?: boolean;
  onClose?: () => void;
  toggleInpModal?: () => void;
};

const CategoryModal = ({ isVisible, onClose }: CategoryModalProps) => {
  return (
    <CustomModal
      isVisible={isVisible}
      onClose={onClose}
      containerStyle={styles.modalContainer}>
      <Text>Category modal!</Text>
    </CustomModal>
  );
};

export default CategoryModal;
