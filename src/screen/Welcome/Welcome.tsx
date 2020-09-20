import React from 'react';
import {View, Text, Button} from 'react-native';

// styles
import {styles} from './Welcome.style';
import {primaryColors} from '../../constans/colors';

// utils
import {Props} from './Welcome.props';

export const Welcome: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>{'Welcome'}</Text>
      <Button
        title={'Press to proceed'}
        onPress={() => navigation.navigate('MapScreen')}
        color={primaryColors.textDark}
      />
    </View>
  );
};
