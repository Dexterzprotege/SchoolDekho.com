import React from 'react'
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

// import homeimg from '../../assets/homeicon.png';
// import { Image } from 'react-bootstrap';

export default function Home() {
     return (
          <View style={styles.container}>
               <Text h4>Find Schools Near You! {"\n"} </Text>
               <Image source={require('../../assets/homeicon.png')} />
               <Button
                    title="Locate schools"
               />
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
     }
});