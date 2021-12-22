import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/HomeScreen';
import {SearchCityScreen} from './screens/SearchCityScreen';
import {SearchCountryScreen} from './screens/SearchCountryScreen';
import React from 'react';
import {CityScreen} from './screens/CityScreen';
import {CountryScreen} from './screens/CountryScreen';

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
