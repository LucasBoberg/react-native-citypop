import {GeoName} from './geoname';

export type StackParamList = {
  Home: undefined;
  SearchCity: undefined;
  SearchCountry: undefined;
  Country: {data: GeoName};
  City: {data: GeoName};
};
