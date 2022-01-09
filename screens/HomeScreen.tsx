import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../types/stackParamList';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

export const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={{padding: 10}}>
      <Text
        style={{
          fontSize: 40,
          color: '#000',
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
