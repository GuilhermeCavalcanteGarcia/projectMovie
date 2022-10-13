import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
const filme = ({ filme }) => {
  return (
    <TouchableOpacity>
      <View style={styles.filme}>
        <Text style={styles.filmeNome}>{filme.nomeFilme}</Text>
        <Image
          style={styles.imageFilme}
          source={{
            uri: filme.linkImagem,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default filme;

const styles = StyleSheet.create({
  filme: {
    marginHorizontal: 5,
    marginVertical: 8,
    borderRadius: 15,
    padding: 50,
    backgroundColor: 'coral',
    alignItems: 'center',
  },
  filmeNome: {
    fontSize: 26,
    color: 'white',
  },
  imageFilme: {
    width: 250,
    height: 250,
    borderRadius: 30,
    marginTop: 20,
  },
});
