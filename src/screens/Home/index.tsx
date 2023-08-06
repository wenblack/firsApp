import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participants"
import { useState } from "react"

export function Home() {
  const peoples = ['Wender', 'Rodrigo', 'Diego', 'Mayk', 'Steve Jobs', 'Michael Phelps']
  const [newUser, setNewUser] = useState('')






  function handleParticipantAdd() {
    if (peoples.includes('Wender')) {
      return Alert.alert('Participante já existe', 'Já existe um participante na lista com esse nome')
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Tem certeza que deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado'),
      },
      {
        text: 'Não',
        style: 'cancel'
      }

    ])
  }
  return (
    <View style={styles.container}>
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
        data={peoples}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Ninguém chegou ao evento ainda? Adicione participantes a sua lista de presença.</Text>
        )}
        renderItem={({ item, index }) => (
          <Participant
            name={item}
            key={index}
            pressed={() => handleParticipantRemove(item)}
          />
        )}
      />




    </View>
  )
}
