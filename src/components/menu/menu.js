import React, { useState } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'; 
import styles from './menu.sass'; 

const Menu = () => {  
  const [selectedMenuItem, setSelectedMenuItem] = useState('salle'); // État pour suivre l'élément sélectionné

  // Fonction pour mettre à jour l'élément sélectionné
  const handleMenuItemPress = (item) => {
    setSelectedMenuItem(item);
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
    </View>
  );
};

export default Menu;
