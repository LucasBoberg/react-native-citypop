import React, {useEffect, useState} from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import {GeoName} from '../types/geoname';

export const CountryScreen = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<readonly GeoName[]>([]);
  const [error, setError] = useState('');
  const fetchCities = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'http://api.geonames.org/searchJSON?maxRows=10&username=weknowit&cities=cities15000&q=' +
          route.params.data.name,
      );
      const json = await response.json();
      const cityData: GeoName[] = json.geonames.sort(
        (a, b) => b.population - a.population,
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
    <View style={{padding: 10}}>
      <Text>{route.params.data.name}</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.geonameId}
        renderItem={({item}) => (
          <Button
            title={item.name}
            onPress={() => navigation.navigate('City', {data: item})}
          />
        )}
      />
    </View>
  );
};
