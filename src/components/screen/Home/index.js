import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles'

import Header from '../../home/HomeHeader';
import Date from '../../home/DateComponent'



const Home = () => {

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Date style={styles.date} />
        <View style={styles.content}>
          <Text style={styles.textContent}>
            Confira as Ofertas para hoje!!
          </Text>
        </View>
        <View style={styles.statsContent}>
          <Text style={styles.text}>Pets Shopping, Clínicas, Banho, Tosa e muito mais...</Text>
        </View>
      </View>
    </View>
  );
}

export default Home;