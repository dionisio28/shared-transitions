import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import * as Pages from './';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

function RootApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Pages.Home} />
        <Stack.Screen
          name="Photo"
          component={Pages.Photo}
          sharedElements={routes => {
            return [routes.params.photo.id];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootApp;
