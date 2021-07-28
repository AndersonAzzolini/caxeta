import { Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import cores from '../assets/cores.json'

const Botao = (props) => (

  <TouchableOpacity style={[buttonStyles.btn, props.style]}
    onPress={props.onPress}>

    <Text style={[buttonStyles.text, props.styleText]}>{props.textoBotao}</Text>
  </TouchableOpacity>

)

const buttonStyles = StyleSheet.create({

  btn: {
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: cores.botoes,
    borderRadius: 40,
  },

  text: {
    color: cores.branco,
    fontSize: Dimensions.get("window").width * 0.07,
    fontFamily:"",
  },
})

export default Botao