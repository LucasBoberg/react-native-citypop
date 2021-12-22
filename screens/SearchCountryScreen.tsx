import React, {useState} from 'react';
import {View} from 'react-native';
import {SearchInput} from '../components/SearchInput';

export const SearchCountryScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const searchCities = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'http://api.geonames.org/searchJSON?maxRows=10&username=weknowit&q=' +
          query,
      );
      const json = await response.json();
      const cityData = json.geonames[0];
      if (cityData) {
        navigation.navigate('Country', {data: cityData});
      } else {
        setError('No country with that name exists');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{padding: 10}}>
      <SearchInput
        value={query}
        onChangeText={text => setQuery(text)}
        placeholder="Enter Country"
        onSubmit={searchCities}
      />
    </View>
  );
};
