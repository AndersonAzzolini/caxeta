import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  View
} from 'react-native'
import { styles } from "../styles/incio";
import Botao from "../components/botao";

const Inicio = () => {

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
          onPress={() => console.log("jogar online")}
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

