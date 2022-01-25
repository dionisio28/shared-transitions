import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import * as Pages from './';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {RootStackParamList} from '../@types/routes.type';

const Stack = createSharedElementStackNavigator<RootStackParamList>();

function RootApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardOverlayEnabled: true,
          cardStyle: {backgroundColor: 'transparent'},
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
