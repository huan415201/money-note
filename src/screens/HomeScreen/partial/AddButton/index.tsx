import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import CategoryModal from '../CategoryModal';
import InputModal from '../InputModal';
import { styles } from './styles';

const AddButton = () => {
  const [showCatModal, setShowCatModal] = useState<boolean>(false);
  const [showInpModal, setShowInpModal] = useState<boolean>(false);

  const toggleCatModal = () => setShowCatModal(prev => !prev);

  const toggleInpModal = () => setShowInpModal(prev => !prev);

  return (
    <View>
      <TouchableOpacity style={styles.addButton} onPress={toggleCatModal}>
        <Icon name="plus" size={100} />
      </TouchableOpacity>
      <CategoryModal
        isVisible={showCatModal}
        onClose={toggleCatModal}
        toggleInpModal={toggleInpModal}
      />
      <InputModal isVisible={showInpModal} onClose={toggleInpModal} />
    </View>
  );
};

export default AddButton;
