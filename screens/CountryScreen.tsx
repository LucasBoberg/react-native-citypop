import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {GeoName} from '../types/geoname';
import {Button} from '../components/Button';
import {GeoNameView} from '../components/GeoNameView';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../types/stackParamList';

type Props = NativeStackScreenProps<StackParamList, 'Country'>;

export const CountryScreen = ({navigation, route}: Props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<readonly GeoName[]>([]);
  const fetchCities = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'http://api.geonames.org/searchJSON?maxRows=10&username=weknowit&cities=cities15000&q=' +
          route.params.data.name,
      );
      const json = await response.json();
      const cityData: GeoName[] = json.geonames.sort(
        (a: GeoName, b: GeoName) => b.population - a.population,
      );
      setData(cityData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <View style={{padding: 10, flexDirection: 'column', flex: 1}}>
      <View
        style={{
          flex: 1,
        }}>
        <GeoNameView
          name={route.params.data.name}
          population={route.params.data.population}
        />
        {loading && (
          <ActivityIndicator
            style={{position: 'absolute', top: -20, left: '46%', zIndex: 10}}
          />
        )}
      </View>
      <View
        style={{
          flex: 4,
        }}>
        <FlatList
          data={data}
          keyExtractor={item => item.geonameId.toString()}
          renderItem={({item}) => (
            <View
              style={{
                marginVertical: 4,
              }}>
              <Button
                title={item.name}
                onPress={() => navigation.navigate('City', {data: item})}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};
