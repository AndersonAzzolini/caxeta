import React, { useState, useEffect } from "react";
import {
  Alert,
  Image,
  View,
} from 'react-native'
import { styles } from "../styles/incio";
import Botao from "../components/botao";
import { RadioButton, Text } from 'react-native-paper';

const Lista = ({ navigation }) => {
  const [jogadores, setJogadores] = useState([])
  const [menorPontuacao, setMenorPontuacao] = useState()
  
  useEffect(() => {
    setJogadores(listaJogadores)
    verificaMenorPontuacao(listaJogadores)
  }, [])

  const verificaMenorPontuacao = (arr) => { // seta a menor pontuação da rodada
    let arrayPontos = []
    arr.map((index => {
      arrayPontos.push(index.pontosAnteriores)
    }))
    setMenorPontuacao(Math.min(...arrayPontos));
  }
  var listaJogadores = [{
    nomeJogador: "jogador1",
    id: 1,
    posicao: 1,
    pontosAnteriores: 10,
  },
  {
    nomeJogador: "jogador2",
    id: 2,
    posicao: 2,
    pontosAnteriores: 1,
  },
  {
    nomeJogador: "jogador3",
    id: 3,
    posicao: 3,
    pontosAnteriores: 1,
  }]

  const verificaPonto = async () => {
    const newUsersList = jogadores.filter((jogadores) => !jogadores.pontosAtuais);
    if (newUsersList.length > 0) {
      show()
    } else {
      const verificaPonto = jogadores.filter((jogadores) => jogadores.pontosAtuais <= 0);
      console.log(verificaPonto);
      console.log(menorPontuacao);

      if (verificaPonto.length > 0) {
        verificaPonto.map((index => {
          console.log(index.nomeJogador);
        }))
      }
      //se verificaPoont > 0, abrir modal na tela com checkbox para selecionar jogadores que deseja realizar a compra
      //   await verificaPonto.map((index => {
      //     Alert.alert(
      //       'Erro',
      //       ` ${index.nomeJogador} deve comprar para processeguir`,
      //       [
      //         {
      //           text: "Cancel",
      //           onPress: () => console.log("Cancel Pressed"),
      //           style: "cancel"
      //         },
      //         { text: "OK", onPress: async () => await show3(index.id) }
      //       ]
      //     )
      //   }));
    }
  }

  function teste(posicao, newValue) {
    if (newValue == "Correu") {
      let pontos = jogadores[posicao].pontosAnteriores - 1
      const arr = jogadores.map((info, index) => {
        return index == posicao ? { ...info, pontosAtuais: pontos } : info
      })
      setJogadores(arr)
    } else if (newValue == "Perdeu") {
      let pontos = jogadores[posicao].pontosAnteriores - 2
      const arr = jogadores.map((info, index) => {
        return index == posicao ? { ...info, pontosAtuais: pontos } : info
      })
      setJogadores(arr)

    } else {
      let pontos = jogadores[posicao].pontosAnteriores
      const arr = jogadores.map((info, index) => {
        return index == posicao ? { ...info, pontosAtuais: pontos } : info
      })
      setJogadores(arr)
    }
  }

  const show = () => {
    Alert.alert(
      'Erro',
      'É nescessario marcar as opções para todos os jogadores'
    )
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.viewBotoes}>
          {jogadores.map((index, posicao) =>
            <View>
              < RadioButton.Group onValueChange={newValue => teste(posicao, newValue)} value={index.id}>
                <View style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: 400
                }}>

                  <View>
                    <Text>Venceu</Text>
                    <RadioButton value="Venceu" />
                  </View>
                  <View>
                    <Text>correu</Text>
                    <RadioButton value="Correu" />
                  </View>
                  <View>
                    <Text>perdeu</Text>
                    <RadioButton value="Perdeu" />
                  </View>
                </View>
                <Text>{index.pontosAtuais}</Text>
              </RadioButton.Group>
              <Text>{index.acao}</Text>
            </View>
          )
          }
          <Botao textoBotao="proxima rodada"
            onPress={() => { verificaPonto() }} />
          {/* {jogadores.forEach((index) => {
          console.log(index.nomeJogador)
        })} */}
        </View>
      </View >
    </>
  )
};

export default Lista

