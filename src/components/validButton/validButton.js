import React from 'react';
import { View, Text } from 'react-native';
import styles from './validButton.sass';

const ValidButton = () => {

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Suivant</Text>
    </View>
  );
};

export default ValidButton;
