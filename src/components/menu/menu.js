import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './menu.sass';
import List from '../list/list';
import ValidButton from '../validButton/validButton';

import dataSalle from './dataSalle';
import dataCuisine from './dataCuisine';
import dataService from './dataService';

const Menu = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('salle');
  const [salleChecked, setSalleChecked] = useState(false);
  const [cuisineChecked, setCuisineChecked] = useState(false);
  const [serviceChecked, setServiceChecked] = useState(false);

  const handleMenuItemPress = (item) => {
    setSelectedMenuItem(item);
  };

  const handleCategoryCheckedChange = (category, isChecked) => {
    switch (category) {
      case 'salle':
        setSalleChecked(isChecked);
        break;
      case 'cuisine':
        setCuisineChecked(isChecked);
        break;
      case 'service':
        setServiceChecked(isChecked);
        break;
      default:
        break;
    }
  };

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

      <List
        category={selectedMenuItem}
        data={selectedMenuItem === 'salle' ? dataSalle : selectedMenuItem === 'cuisine' ? dataCuisine : dataService}
        onCheckedChange={(isChecked) => handleCategoryCheckedChange(selectedMenuItem, isChecked)}
      />

      {salleChecked && cuisineChecked && serviceChecked && (
        <ValidButton/>
      )}
    </View>
  );
};

export default Menu;
