import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { filmeJson } from '../data/filmes';
import Filmes from './Filme';
const ListaFilmes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>LISTA - FILMES</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {filmeJson.map((filme) => (
          <Filmes key={filme.id} filme={filme}></Filmes>
        ))}
      </ScrollView>
    </View>
  );
};

export default ListaFilmes;

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: 'white',
    flex: 1,
  },
  titulo: {
    color: 'white',
    fontSize: 30,
    marginHorizontal: 5,
    marginVertical: 10,
    alignSelf: 'center',
    backgroundColor: 'coral',
    padding: 20,
    borderRadius: 30,
  },
});
