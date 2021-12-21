import React from 'react';
import {
  Button,
  NativeSyntheticEvent,
  TextInput,
  TextInputSubmitEditingEventData,
} from 'react-native';

interface SearchInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
}

export const SearchInput = ({
  placeholder,
  value,
  onChangeText,
  onSubmit,
}: SearchInputProps) => {
  return (
    <TextInput
      style={{height: 40}}
      placeholder={placeholder}
      onChangeText={onChangeText}
      defaultValue={value}
      onSubmitEditing={onSubmit}
    />
  );
};
