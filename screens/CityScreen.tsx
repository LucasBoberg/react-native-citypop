import React from 'react';
import {Text} from 'react-native';

export const CityScreen = ({navigation, route}) => {
  return (
    <>
      <Text>{route.params.data.name}</Text>
      <Text>{JSON.stringify(route.params.data)}</Text>
    </>
  );
};
