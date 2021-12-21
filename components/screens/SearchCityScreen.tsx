import React from 'react';
import {Button} from 'react-native';

export const SearchCityScreen = ({navigation}) => {
  return <Button title="City" onPress={() => navigation.navigate('City')} />;
};
