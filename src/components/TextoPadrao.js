import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function TextoPadrao({children, style}) {
  let estilo = styles.textoPadrao;

  if (style?.fontWeight === 'bold') {
    estilo = styles.textoNegrito;
  }

  return <Text style={[style, estilo]}>{children}</Text>;
}

const styles = StyleSheet.create({
  textoPadrao: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'normal',
  },
  textoNegrito: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'normal',
  },
});
