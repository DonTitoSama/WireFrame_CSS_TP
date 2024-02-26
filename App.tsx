import React from 'react';
import { View } from 'react-native';
import Header from './src/components/header/header';
import Menu from './src/components/menu/menu';

const App = () => {
  return (
    <View>
      <Header title="Qui travaille aujourd'hui ?"/>
      <Menu/>
    </View>
  );
};

export default App;
