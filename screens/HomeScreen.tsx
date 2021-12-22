import React from 'react';
import {Button} from 'react-native';

export const HomeScreen = ({navigation}) => {
  return (
    <>
      <Button
        title="Search by City"
        onPress={() => navigation.navigate('SearchCity')}
      />
      <Button
        title="Search by Country"
        onPress={() => navigation.navigate('SearchCountry')}
      />
    </>
  );
};
