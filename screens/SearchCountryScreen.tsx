import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {Button} from '../components/Button';
import {NoResult} from '../components/NoResult';
import {SearchInput} from '../components/SearchInput';
import {GeoName} from '../types/geoname';

export const SearchCountryScreen = ({navigation}) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<GeoName[]>([]);

  const searchCountries = async () => {
    try {
      const response = await fetch(
        'http://api.geonames.org/searchJSON?maxRows=10&username=weknowit&featureClass=A&q=' +
          query,
      );
      const json = await response.json();
      setResult(json.geonames);
    } catch (err) {
      console.error(err);
    }
  };

  const search = (text: string) => {
    setQuery(text);
    searchCountries();
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
          placeholder="Enter Country"
          onSubmit={searchCountries}
        />
      </View>
      <View style={{flex: 8}}>
        {query === '' && result.length === 0 && (
          <NoResult text="Start by searching for a country" />
        )}
        <FlatList
          data={result}
          keyExtractor={item => item.geonameId}
          renderItem={({item}) => (
            <View
              style={{
                marginVertical: 4,
              }}>
              <Button
                title={item.name}
                onPress={() => navigation.navigate('Country', {data: item})}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};
