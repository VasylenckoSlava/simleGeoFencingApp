import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigatorParamList} from '../../navigation/RootNavigator/Rootnavigator.props';

export type Props = {
  navigation: CompositeNavigationProp<
    any,
    StackNavigationProp<NavigatorParamList, 'Welcome'>
  >;
  route: RouteProp<NavigatorParamList, 'Welcome'>;
};
