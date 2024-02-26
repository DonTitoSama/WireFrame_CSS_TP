import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native'; 
import styles from './menu.sass'; 
import List from '../list/list';

import dataSalle from './dataSalle';
import dataCuisine from './dataCuisine';
import dataService from './dataService';

const Menu = () => {  
  const [selectedMenuItem, setSelectedMenuItem] = useState('salle');

  const handleMenuItemPress = (item) => {
    setSelectedMenuItem(item);
  };

  let data;
  switch (selectedMenuItem) {
    case 'salle':
      data = dataSalle;
      break;
    case 'cuisine':
      data = dataCuisine;
      break;
    case 'service':
      data = dataService;
      break;
    default:
      data = [];
  }

  return (
    <View style={styles.menuContainer}>
        <TouchableWithoutFeedback onPress={() => handleMenuItemPress('salle')}>
            <Text style={selectedMenuItem === 'salle' ? styles.default : styles.reset}>salle</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handleMenuItemPress('cuisine')}>
            <Text style={selectedMenuItem === 'cuisine' ? styles.default : styles.reset}>cuisine</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handleMenuItemPress('service')}>
            <Text style={selectedMenuItem === 'service' ? styles.default : styles.reset}>service</Text>
        </TouchableWithoutFeedback>

        <List data={data} />

    </View>
  );
};

export default Menu;
