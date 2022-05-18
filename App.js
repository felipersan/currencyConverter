import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import {keyExtractor} from 'react-native/Libraries/Lists/VirtualizeUtils';

import Picker from './src/components/Picker';
import api from './src/Services/api';

export default function App() {
  const [moedas, setMoedas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [moedaSelecionada, setMoedaSelecionada] = useState(null);
  const [moedaValor, setMoedaValor] = useState(0);
  const [valorMoeda, setValorMoeda] = useState(null);
  const [valorConvertido, setValorConvertido] = useState(0);

  useEffect(() => {
    async function loadMoedas() {
      const response = await api.get('all');
      let arrayMoedas = [];
      Object.keys(response.data).map(key => {
        arrayMoedas.push({
          key: key,
          label: key,
          value: key,
        });
      });
      setMoedas(arrayMoedas);
      setLoading(false);
    }
    loadMoedas();
  }, []);

  async function converter() {
    if (moedaSelecionada == null || moedaValor == 0) {
      alert('Por favor, selecione uma moeda e digite um valor');
      return;
    } else {
      const response = await api.get(`all/${moedaSelecionada}-BRL`);
      let resultado = response.data[moedaSelecionada].ask * moedaValor;
      setValorConvertido(resultado.toFixed(2));
      setValorMoeda(moedaValor);

      Keyboard.dismiss();
    }
  }

  if (loading) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <ActivityIndicator color="#7d74ce" size={50} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.areaMoeda}>
          <Text style={styles.titulo}>Selecione a sua moeda</Text>
          <Picker
            moedas={moedas}
            onChange={moeda => {
              setMoedaSelecionada(moeda);
            }}
          />
        </View>
        <View style={styles.areaValor}>
          <Text style={styles.titulo}>Digite um valor para converter</Text>
          <TextInput
            style={styles.input}
            placeholder={'ex: 1950'}
            keyboardType={'numeric'}
            onChangeText={value => {
              setMoedaValor(value);
            }}
          />
        </View>
        <TouchableOpacity style={styles.btnArea} onPress={converter}>
          <Text style={styles.btnText}>Converter</Text>
        </TouchableOpacity>

        {valorConvertido !== 0 && (
          <View style={styles.areaResult}>
            <Text style={styles.valueconvert}>
              {moedaValor + ' ' + moedaSelecionada}
            </Text>
            <Text style={styles.valuecorresponde}> corresponde a:</Text>
            <Text style={styles.valueconvert}>{'R$: ' + valorConvertido} </Text>
          </View>
        )}
      </View>
    );
  }
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
