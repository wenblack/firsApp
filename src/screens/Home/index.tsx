import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { styles } from "./styles"

export function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>
    </View>
  )
}
