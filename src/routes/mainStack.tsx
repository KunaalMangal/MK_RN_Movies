import {createStackNavigator} from '@react-navigation/stack';

import {routes} from '@app/routes/routes';
import {HOME, MOVIES, PROFILE} from '@app/views/';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.HOME_SCREEN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.HOME_SCREEN} component={HOME} />
      <Stack.Screen name={routes.MOVIES_SCREEN} component={MOVIES} />
      <Stack.Screen name={routes.PROFILE_SCREEN} component={PROFILE} />
    </Stack.Navigator>
  );
};

export default MainStack;
