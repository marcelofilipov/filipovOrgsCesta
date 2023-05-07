import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';

import Cesta from './src/pages/cesta';
import mock from './src/mocks/cesta';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} hidden={false} />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
