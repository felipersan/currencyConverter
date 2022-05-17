import React from 'react';

import RNPickerSelect from 'react-native-picker-select';

export default function Picker() {
  const placeholder = {
    label: 'selecione uma moeda...',
    value: null,
    color: '#121212',
  };

  return (
    <RNPickerSelect
      placeholder={placeholder}
      items={[
        {key: '1', label: 'USD', value: 'USD'},
        {key: '2', label: 'BRL', value: 'BRL'},
      ]}
      onValueChange={value => {
        console.log(value);
      }}
    />
  );
}
