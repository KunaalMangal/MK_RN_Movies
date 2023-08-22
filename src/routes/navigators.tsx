import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from '@app/routes/authStack';
import MainStack from '@app/routes/mainStack';
import {routes} from '@app/routes/routes';

const Stack = createStackNavigator();

const AppNavigations = () => {
  const isLoggedIN = false;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isLoggedIN ? (
          <>
            <Stack.Screen name={routes.AUTH_STACK} component={AuthStack} />
            <Stack.Screen name={routes.MAIN_STACK} component={MainStack} />
          </>
        ) : (
          <>
            <Stack.Screen name={routes.MAIN_STACK} component={MainStack} />
            <Stack.Screen name={routes.AUTH_STACK} component={AuthStack} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigations;
