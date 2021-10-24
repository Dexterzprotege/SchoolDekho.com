import { position } from 'dom-helpers';
import React, { useState } from 'react'
import { StyleSheet, View, Image, Alert, Modal, Pressable } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

// import homeimg from '../../assets/homeicon.png';
// import { Image } from 'react-bootstrap';

export default function Home() {

    const [modalVisible, setModalVisible] = useState(false);
     return (
          <View style={styles.container}>
               <Text h4>Find Schools Near You! {"\n"} </Text>
               <Image source={require('../../assets/homeicon.png')}/>
               <Button
                    title="Locate schools"
                    onPress={() => setModalVisible(true)}
               />
               <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
               <Text h4>Enable my location </Text>
               <Text>This app requires that location services are
 turned on your device and for this app. You must
 enable them in Settings before using this app.</Text>
            <Button
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
              title = "Allow only While using this app"
            />
            <Text>Don't Allow</Text>
          </View>
        </View>
      </Modal>
    </View>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
     },
     centeredView: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 22
        },
        modalView: {
          // margin: 20,
          backgroundColor: "white",
          // borderRadius: 20,
          padding: 40,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5
        },
        button: {
          borderRadius: 20,
          padding: 10,
          elevation: 2
        },
        buttonOpen: {
          backgroundColor: "#F194FF",
        },
        buttonClose: {
          backgroundColor: "#2196F3",
        },
        textStyle: {
          color: "white",
          fontWeight: "bold",
          textAlign: "center"
        },
        modalText: {
          marginBottom: 15,
          textAlign: "center"
        }
      
});