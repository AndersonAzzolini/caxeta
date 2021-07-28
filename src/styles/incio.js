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
    justifyContent: "center",
    flex: 0.45
  },
  viewImagem: {
    flex: 0.55
  },
  imagem: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
})

export { styles }