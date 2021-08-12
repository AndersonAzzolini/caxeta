import { StyleSheet, Dimensions } from 'react-native'
import cores from '../assets/cores.json'
const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: cores.fundo,
    justifyContent: "center",
    alignItems: "center"
  },
  viewBotoes: {
    justifyContent: "space-evenly",
    flex: 0.8
  },
  viewImagem: {
    flex: 0.8
  },
  imagem: {
    flex: 1,
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").height * 0.7
  },
})

export { styles }