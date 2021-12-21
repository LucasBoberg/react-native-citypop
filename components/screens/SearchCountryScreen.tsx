import React from 'react';
import {Button} from 'react-native';

export const SearchCountryScreen = ({navigation}) => {
  return (
    <Button title="Country" onPress={() => navigation.navigate('Country')} />
  );
};
