import React, {useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {Button} from '../components/Button';
import {NoResult} from '../components/NoResult';
import {SearchInput} from '../components/SearchInput';
import {GeoName} from '../types/geoname';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../types/stackParamList';

type Props = NativeStackScreenProps<StackParamList, 'SearchCity'>;

export const SearchCityScreen = ({navigation}: Props) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<GeoName[]>([]);
  const [loading, setLoading] = useState(false);

  const searchCities = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'http://api.geonames.org/searchJSON?maxRows=10&username=weknowit&cities=cities15000&q=' +
          query,
      );
      const json = await response.json();
      setResult(json.geonames);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const search = (text: string) => {
    setQuery(text);
    searchCities();
  };

  return (
    <View style={{padding: 10, flexDirection: 'column', flex: 1}}>
      <View
        style={{
          flex: 1,
          marginTop: 20,
        }}>
        <SearchInput
          value={query}
          onChangeText={search}
          placeholder="Enter City"
          onSubmit={searchCities}
        />
      </View>
      <View style={{flex: 8}}>
        {loading && (
          <ActivityIndicator
            style={{position: 'absolute', top: -20, left: '46%', zIndex: 10}}
          />
        )}
        {query === '' && result.length === 0 && (
          <NoResult text="Start by searching for a city" />
        )}
        {query !== '' && result.length === 0 && (
          <NoResult text="No city with that name" />
        )}
        <FlatList
          data={result}
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
