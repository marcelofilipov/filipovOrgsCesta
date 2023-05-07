import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import TextoPadrao from '../../components/TextoPadrao';

import Header from './components/Header';
import Details from './components/Details';
import Item from './components/Item';

export default function Cesta({header, details, items}) {
  return (
    <>
      <FlatList
        data={items.listBasket}
        renderItem={Item}
        keyExtractor={({nameVeg}) => nameVeg}
        ListHeaderComponent={() => {
          return (
            <>
              <Header {...header} />
              <View style={styles.basket}>
                <Details {...details} />
                <TextoPadrao style={styles.title}>{items.title}</TextoPadrao>
              </View>
            </>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
});
