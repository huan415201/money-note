import { Text } from 'react-native';
import { CustomModal } from 'src/commons';

type InputModalProps = {
  isVisible?: boolean;
  onClose?: () => void;
};

const InputModal = ({ isVisible, onClose }: InputModalProps) => {
  return (
    <CustomModal isVisible={isVisible} onClose={onClose}>
      <Text>Input modal!</Text>
    </CustomModal>
  );
};

export default InputModal;
