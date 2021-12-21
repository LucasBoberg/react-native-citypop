/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './components/screens/HomeScreen';
import {SearchCityScreen} from './components/screens/SearchCityScreen';
import {SearchCountryScreen} from './components/screens/SearchCountryScreen';
import React from 'react';
import {CityScreen} from './components/screens/CityScreen';
import {CountryScreen} from './components/screens/CountryScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="SearchCity"
          component={SearchCityScreen}
          options={{title: 'Search City'}}
        />
        <Stack.Screen
          name="SearchCountry"
          component={SearchCountryScreen}
          options={{title: 'Search Country'}}
        />
        <Stack.Screen
          name="Country"
          component={CountryScreen}
          options={{title: 'Country'}}
        />
        <Stack.Screen
          name="City"
          component={CityScreen}
          options={{title: 'City'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
