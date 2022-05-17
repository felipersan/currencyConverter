import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Picker from './src/components/Picker';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.areaMoeda}>
        <Text style={styles.titulo}>Selecione a sua moeda</Text>
        <Picker />
      </View>
      <View style={styles.areaValor}>
        <Text style={styles.titulo}>Digite um valor para converter</Text>
        <TextInput
          style={styles.input}
          placeholder={'ex: 1950'}
          keyboardType={'numeric'}
        />
      </View>
      <TouchableOpacity style={styles.btnArea}>
        <Text style={styles.btnText}>Converter</Text>
      </TouchableOpacity>
      <View style={styles.areaResult}>
        <Text style={styles.valueconvert}> 3 USD</Text>
        <Text style={styles.valuecorresponde}> corresponde a:</Text>
        <Text style={styles.valueconvert}> R$ 19,90 </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  areaMoeda: {
    width: '90%',
    paddingTop: 9,
    backgroundColor: '#7d74ce',
    borderRadius: 9,
    marginBottom: 12,
  },
  titulo: {
    fontSize: 18,
    paddingLeft: 15,
  },
  areaValor: {
    width: '90%',
    paddingTop: 9,
    backgroundColor: '#7d74ce',
    borderRadius: 9,
  },
  input: {
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 10,
    width: 200,
    borderRadius: 9,
    fontSize: 15,
  },
  btnArea: {
    width: '90%',
    backgroundColor: '#41dd47',
    height: 45,
    margin: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 17,
    color: '#fff',
  },
  areaResult: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#7d74ce',
    borderRadius: 9,
  },
  valueconvert: {
    fontSize: 39,
    fontWeight: 'bold',
    color: '#fff',
  },
  valuecorresponde: {
    fontSize: 23,
    color: '#fff',
  },
});
