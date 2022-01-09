import React from 'react';
import {
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
      style={{
        height: 50,
        fontSize: 20,
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 4,
        backgroundColor: '#FFF',
      }}
      autoComplete="off"
      autoFocus
      placeholder={placeholder}
      onChangeText={onChangeText}
      defaultValue={value}
      onSubmitEditing={onSubmit}
    />
  );
};
