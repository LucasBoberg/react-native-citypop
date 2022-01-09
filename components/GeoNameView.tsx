import React from 'react';
import {Text} from 'react-native';

interface GeoNameViewProps {
  name: string;
  population: number;
}

export const GeoNameView = ({name, population}: GeoNameViewProps) => {
  return (
    <>
      <Text
        style={{
          fontSize: 40,
          color: '#000',
          textAlign: 'center',
          marginTop: 30,
        }}>
        {name}
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: '#000',
          textAlign: 'center',
          marginTop: 10,
          marginBottom: 30,
        }}>
        has a population of{' '}
        <Text style={{fontWeight: 'bold'}}>
          {new Intl.NumberFormat().format(population)}
        </Text>{' '}
        people
      </Text>
    </>
  );
};
