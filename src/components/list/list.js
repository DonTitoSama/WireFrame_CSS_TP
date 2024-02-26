import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './list.sass';

const List = ({ data }) => {
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    setPeopleData(data);
  }, [data]);

  const toggleActive = (index) => {
    setPeopleData(prevData => {
      const updatedPeopleData = [...prevData];
      updatedPeopleData[index].active = !updatedPeopleData[index].active;
      return updatedPeopleData;
    });
  };

  return (
    <View style={styles.container}>
        <View style={styles.listContainer}>
          {peopleData.map((person, index) => (
            <View key={index} style={styles.itemContainer}>
              {/* Icon */}
              <Image source={require('./icon.png')} style={styles.icon} />

              {/* Person Info */}
              <View style={styles.personInfoContainer}>
                <Text style={styles.personName}>{`${person.firstName} ${person.lastName}`}</Text>
                
                {/* Checkbox */}
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    boxType='square' 
                    onCheckColor='#FF6B40'
                    disabled={false}
                    value={person.active} 
                    onValueChange={() => toggleActive(index)}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
    </View>
  );
};

export default List;
