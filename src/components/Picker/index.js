import React from 'react';

import RNPickerSelect from 'react-native-picker-select';

export default function Picker(props) {
  const placeholder = {
    label: 'selecione uma moeda...',
    value: null,
    color: '#121212',
  };

  return (
    <RNPickerSelect
      placeholder={placeholder}
      items={props.moedas}
      onValueChange={value => {
        props.onChange(value);
      }}
    />
  );
}
