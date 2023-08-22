import {createStackNavigator} from '@react-navigation/stack';

import {routes} from '@app/routes/routes';
import {LOGIN, REGISTER} from '@app/views/';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.LOGIN_SCREEN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.LOGIN_SCREEN} component={LOGIN} />
      <Stack.Screen name={routes.REGISTER_SCREEN} component={REGISTER} />
    </Stack.Navigator>
  );
};

export default AuthStack;
