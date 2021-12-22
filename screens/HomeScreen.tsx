import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../components/Button';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={{padding: 10}}>
      <Text
        style={{
          fontSize: 40,
          textAlign: 'center',
          marginVertical: 30,
        }}>
        CityPop
      </Text>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            marginVertical: 10,
          }}>
          <Button
            title="Search by City"
            onPress={() => navigation.navigate('SearchCity')}
          />
        </View>
        <View
          style={{
            marginVertical: 10,
          }}>
          <Button
            title="Search by Country"
            onPress={() => navigation.navigate('SearchCountry')}
          />
        </View>
      </View>
    </View>
  );
};
