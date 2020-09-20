import {StyleSheet} from 'react-native';
import {primaryColors} from '../../constans/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: primaryColors.backgroundDark,
  },
  coordsContainer: {
    marginTop: 40,
  },
  locationContainer: {
    width: '80%',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textFindMyCoords: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    width: '90%',
    height: 45,
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 5,
  },
});
