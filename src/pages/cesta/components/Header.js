import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';

import TextoPadrao from '../../../components/TextoPadrao';

import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Header({title}) {
  return (
    <>
      <Image source={topo} style={styles.topo} />
      <TextoPadrao style={styles.title}>{title}</TextoPadrao>
    </>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: '100%',
    height: (578 / 768) * width,
  },
  title: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: '#fff',
    fontWeight: 'bold',
    padding: 16,
  },
});
