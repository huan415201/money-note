import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  item: {
    flex: 1,
    gap: 4,
    alignItems: 'center',
  },
  name: {
    fontSize: 12,
    color: COLORS.grey,
  },
  activeName: {
    color: COLORS.primary,
  },
});
