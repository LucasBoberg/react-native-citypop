import React from 'react';
import {View} from 'react-native';
import {GeoNameView} from '../components/GeoNameView';

export const CityScreen = ({navigation, route}) => {
  return (
    <View
      style={{
        padding: 10,
      }}>
      <GeoNameView
        name={route.params.data.name}
        population={route.params.data.population}
      />
    </View>
  );
};
