import React from "react";
import {
  Image,
  View
} from 'react-native'
import { styles } from "../styles/incio";
import Botao from "../components/botao";

const Inicio = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.viewImagem}>
        <Image
          style={styles.imagem}
          source={require('../assets/image/imagem_padrao.png')}
        />
      </View>
      <View style={styles.viewBotoes}>
        <Botao
          textoBotao="Jogar online"
          onPress={() => navigation.navigate("Lista")}
        />
        <Botao
          textoBotao="Jogar offline"
          onPress={() => console.log("jogar offilne")}
        />
      </View>
    </View>
  )
};

export default Inicio

