import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './menu.sass';
import List from '../list/list';
import ValidButton from '../validButton/validButton';

import dataSalle from './dataSalle';
import dataCuisine from './dataCuisine';
import dataService from './dataService';

const Menu = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('salle'); // État pour suivre l'élément sélectionné
  const [cuisineClicked, setCuisineClicked] = useState(false); // État pour suivre si "Cuisine" a été cliqué
  const [salleChecked, setSalleChecked] = useState(false); // État pour suivre si une checkbox a été cochée dans la catégorie 'salle'
  const [cuisineChecked, setCuisineChecked] = useState(false); // État pour suivre si une checkbox a été cochée dans la catégorie 'cuisine'
  const [serviceChecked, setServiceChecked] = useState(false); // État pour suivre si une checkbox a été cochée dans la catégorie 'service'

  const handleMenuItemPress = (item) => {
    setSelectedMenuItem(item);
    if (item === 'cuisine') {
      setCuisineClicked(true);
    } else {
      setCuisineClicked(false);
    }
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
        <Text style={selectedMenuItem === 'service' ? styles.default : styles.reset} disabled={!cuisineClicked}>service</Text>
      </TouchableWithoutFeedback>

      <List category={selectedMenuItem} data={selectedMenuItem === 'salle' ? dataSalle : selectedMenuItem === 'cuisine' ? dataCuisine : dataService} onCheckedChange={(isChecked) => handleCategoryCheckedChange(selectedMenuItem, isChecked)} />

      {salleChecked && cuisineChecked && serviceChecked && (
        <ValidButton/>
      )}
    </View>
  );
};

export default Menu;
