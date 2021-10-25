import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const contactsMenuButtons = [
  {
    type: 'starred',
  },
  {
    type: 'contact',
    name: 'Abdul',
    photo: require('../assets/profile3.png')
  },
  {
    type: 'contact',
    name: 'Singh',
    photo: require('../assets/profile3.jpeg')
  },
  {
    type: 'contact',
    name: 'Subhash',
    photo: require('../assets/profile2mb.jpg')
  }
]

function ContactsMenu() {
  return (
    <View style={styles.container}>
      {contactsMenuButtons.map((contact, index) =>
        <View style={styles.row} key={index}>
          {contact.type === 'starred' ?
            <>
              <View style={styles.icon}>
                <AntDesign name='star' size={30} color='#efefef' />
              </View>
              <Text style={styles.text}>Starred</Text>
            </> :
            <>
              <View style={styles.icon}>
                <Image style={styles.image} source={contact.photo} />
              </View>
              <Text style={styles.text}>{contact.name}</Text>
            </>
          }
        </View>
      )}
    </View>
  )
}

export default ContactsMenu

const styles = StyleSheet.create({
  container: {},
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    paddingLeft: 15,
    fontSize: 18
  },
  icon: {
    backgroundColor: '#333333',
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20
  }
})
