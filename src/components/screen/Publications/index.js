import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../../home/HomeHeader';
import styles from './styles'
import firebase from '../../../services/firebase'


function Publications() {
  const [listAds, setListAds] = useState([]);

  useEffect(() => {
    try {
      firebase.database().ref('/ads').on('value', (snapshot) => {
        const list = [];
        snapshot.forEach((childItem) => {
          list.push({
            key: childItem.key,
            title: childItem.val().title,
            price: childItem.val().price,
            describe: childItem.val().describe,
            visibleFrom: childItem.val().visibleFrom,
            visibleTo: childItem.val().visibleTo,
            image: childItem.val().image
          });
        });
        setListAds(list);
      })

    } catch (error) {
      alert(error);
    }
  }, [])

  function sendWhatsapp(number){
    Linking.openURL(`whatsapp://send?phone=5511987654321&text=Olá%20vi%20seu%20anúncio%20no%20PetMagnet%20e%20me%20interessei%20no%20seu%20produto!`)
  }

  return (
    <View style={styles.publicacaoView}>
      <Header />
      <FlatList
        data={listAds}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.publicationsBox}>
            <View style={styles.visivelBox}>
              <View style={styles.visiveUntillBox}>
                <Text style={styles.visivelUntil}>Disponível até: </Text>
                <Text style={styles.statsUntil}>{item.visibleTo}</Text>
              </View>
            </View>
            <Text>{item.title}</Text>
            <View style={styles.fotoBox}>
              <View style={styles.item}>
                <Image
                  style={styles.itemFoto}
                  source={{ uri: `${item.image}` }}
                />
                <Text>R$ {item.price}</Text>
              </View>
            </View>
            <View style={styles.descBox}>
              <Text style={styles.textDesc}>
                {item.describe}
              </Text>
            </View>
            <View style={styles.contactBox}>
              <View style={styles.whatsapp}>
                <TouchableOpacity onPress={sendWhatsapp}>
                  <Icon name="whatsapp" size={26} />
                </TouchableOpacity>
              </View>
              <View style={styles.phone}>
                <TouchableOpacity>
                  <Icon name="phone" size={20} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )} />
    </View>
  );
}

export default Publications;
