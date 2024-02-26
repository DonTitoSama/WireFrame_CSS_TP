import React from 'react';
import { View, Text } from 'react-native';
import styles from './header.sass'

const Header = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <View style={styles.headerContainer}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{formattedDate}</Text>
      </View>
      <Text style={styles.headerText}>En-tête de mon application</Text>
    </View>
  );
};

export default Header;
