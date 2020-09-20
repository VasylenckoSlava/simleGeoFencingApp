import {StyleSheet} from 'react-native';
import {primaryColors} from '../../constans/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primaryColors.backgroundDark,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
