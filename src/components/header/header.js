import React from 'react';
import { View, Text, Image } from 'react-native'; 
import styles from './header.sass'; 

const Header = ({title}) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('fr-FR', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });
  
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.dateContainer}>{formattedDate}</Text>
      <Text style={styles.titleText}>{title}</Text>
      <Image source={require('./menu.png')} style={styles.menuIcon} />
    </View>
  );
};

export default Header;
