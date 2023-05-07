import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import TextoPadrao from '../../../components/TextoPadrao';

export default function Details({
  name,
  farmLogo,
  farmName,
  description,
  price,
  buyButton,
}) {
  return (
    <>
      <TextoPadrao style={styles.name}>{name}</TextoPadrao>
      <View style={styles.farm}>
        <Image source={farmLogo} style={styles.farmImage} />
        <TextoPadrao style={styles.farmName}>{farmName}</TextoPadrao>
      </View>
      <TextoPadrao style={styles.description}>{description}</TextoPadrao>
      <TextoPadrao style={styles.price}>{price}</TextoPadrao>

      <TouchableOpacity style={styles.buyButton} onPress={() => {}}>
        <TextoPadrao style={styles.textBuyButton}>{buyButton}</TextoPadrao>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  farm: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  farmImage: {
    width: 36,
    height: 36,
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  description: {
    color: '#a3a3a3',
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: '#2a9f85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  buyButton: {
    marginTop: 16,
    backgroundColor: '#2a9f85',
    paddingVertical: 16,
    borderRadius: 12,
  },
  textBuyButton: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
});
