import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './list.sass';

const List = ({ data }) => {
  const [peopleData, setPeopleData] = useState([]);

  // Mettre à jour l'état peopleData lorsque les données changent
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
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.listContainer}>
          {peopleData.map((person, index) => (
            <View key={index} style={styles.itemContainer}>
              <View style={styles.switchContainer}>
                <CheckBox
                  disabled={false}
                  value={person.active} 
                  onValueChange={() => toggleActive(index)}
                />
              </View>
              <Text style={styles.personName}>{`${person.firstName} ${person.lastName}`}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default List;
