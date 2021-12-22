import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {GeoName} from '../types/geoname';
import {Button} from '../components/Button';

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
    <View style={{padding: 10, flexDirection: 'column', flex: 1}}>
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            fontSize: 40,
            textAlign: 'center',
            marginTop: 30,
          }}>
          {route.params.data.name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            marginTop: 10,
            marginBottom: 30,
          }}>
          has a population of{' '}
          <Text style={{fontWeight: 'bold'}}>
            {new Intl.NumberFormat().format(route.params.data.population)}
          </Text>{' '}
          people
        </Text>
      </View>
      <View
        style={{
          flex: 4,
        }}>
        <FlatList
          data={data}
          keyExtractor={item => item.geonameId}
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
