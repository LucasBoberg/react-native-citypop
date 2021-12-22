import React from 'react';
import {Text} from 'react-native';

interface NoResultProps {
  text: string;
}

export const NoResult = ({text}: NoResultProps) => {
  return (
    <Text
      style={{
        fontSize: 20,
        textAlign: 'center',
      }}>
      {text}
    </Text>
  );
};
