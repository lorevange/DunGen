import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import GeneratorScreen from './screens/GeneratorScreen';

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown : false,}}
        />
        <Stack.Screen 
          name="Generator" 
          component={GeneratorScreen} 
          options={{headerShown : false,}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
