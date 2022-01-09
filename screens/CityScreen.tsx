import React from 'react';
import {View} from 'react-native';
import {GeoNameView} from '../components/GeoNameView';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../types/stackParamList';

type Props = NativeStackScreenProps<StackParamList, 'City'>;

export const CityScreen = ({route}: Props) => {
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
