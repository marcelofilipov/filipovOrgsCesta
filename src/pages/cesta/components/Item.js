import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import TextoPadrao from '../../../components/TextoPadrao';

export default function Item({item: {nameVeg, imageVeg}}) {
  return (
    <View style={styles.item}>
      <Image source={imageVeg} style={styles.image} />
      <TextoPadrao style={styles.name}>{nameVeg}</TextoPadrao>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  image: {
    width: 46,
    height: 46,
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646',
  },
});
