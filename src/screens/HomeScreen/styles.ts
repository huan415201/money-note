import { StyleSheet } from 'react-native';
import { COLORS } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  addButton: {
    alignSelf: 'center',
    padding: 12,
    gap: 12,
    alignItems: 'center',
  },
});
