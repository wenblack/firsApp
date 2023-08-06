import { StatusBar } from "expo-status-bar"
import { Text, TextInput, View, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participants"

export function Home() {
  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!")
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant
        name="Wender Barbosa"
      />
      <Participant
        name="Wender Barbosa"
      />
      <Participant
        name="Wender Barbosa"
      />

    </View>
  )
}
