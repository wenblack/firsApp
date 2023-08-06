import { StatusBar } from "expo-status-bar"
import { Text, TextInput, View, TouchableOpacity, FlatList } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participants"

export function Home() {
  const peoples = ['Wender', 'Rodrigo', 'Diego', 'Mayk', 'Steve Jobs', 'Michael Phelps']

  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!")
  }

  function handleParticipantRemove() {
    console.log("Você clicou no botão de Remover!")
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




      <FlatList
        data={[]}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Ninguém chegou ao evento ainda? Adicione participantes a sua lista de presença.</Text>
        )}
        renderItem={({ item, index }) => (
          <Participant
            name={item}
            key={index}
            pressed={handleParticipantRemove}
          />
        )}
      />




    </View>
  )
}
