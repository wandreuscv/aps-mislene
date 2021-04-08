import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import Header from './components/Header';

const defaultState = {
  buttonClick: false,
  name: '',
  input: '',
  curso: 0,
  cursos: [
    { key: 1, name: 'Sistemas de Informação', },
    { key: 2, name: 'Matemática' },
    { key: 3, name: 'Publicidade e Propaganda' },
    { key: 4, name: 'Admnistração' }
  ],

  periodo: 0,
  periodos: [
    { key: 1, number: 1 },
    { key: 2, number: 2 },
    { key: 3, number: 3 },
    { key: 4, number: 4 },
    { key: 5, number: 5 },
    { key: 6, number: 6 },
    { key: 7, number: 7 },
    { key: 8, number: 8 },
    { key: 9, number: 9 },
    { key: 10, number: 10 },
    { key: 11, number: 11 },
    { key: 12, number: 12 },
    { key: 13, number: 13 },
    { key: 14, number: 14 }
  ],
  
  turno: 0,
  turnos: [
    { key: 1, description: 'Diurno' },
    { key: 2, description: 'Noturno' },
    { key: 3, description: 'Integral' }
  ]
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {...defaultState};
    this.sendUserInfo = this.sendUserInfo.bind(this);
  }

  sendUserInfo() {
    if (this.state.input === '') {
      alert('Digite o seu nome!');
    }
    else {
      this.setState({ name: this.state.input });
      this.setState({ buttonClick: true })
    }
  }

  render() {
    let nomesCursos = this.state.cursos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.name} />
    });
    let periodosCursos = this.state.periodos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.number} />
    })
    let turnosCursos = this.state.turnos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.description} />
    })

    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <SafeAreaView style={styles.menuOptions}>
          <Text style={styles.title}>Preencha todos os campos</Text>
          <TextInput
            style={styles.picker}
            placeholder="Digite seu nome"
            onChangeText={((name) => this.setState({ input: name }))}
          />

          <Text style={styles.pickerText}>Curso</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.curso}
            onValueChange={(itemValue) => this.setState({ curso: itemValue })}
          >
            {nomesCursos}
          </Picker>

          <Text style={styles.pickerText}>Período</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.periodo}
            onValueChange={(itemValue) => this.setState({ periodo: itemValue })}
          >
            {periodosCursos}
          </Picker>

          <Text style={styles.pickerText}>Turno</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.turno}
            onValueChange={(itemValue) => this.setState({ turno: itemValue })}
          >
            {turnosCursos}
          </Picker>

          <TouchableOpacity
            onPress={this.sendUserInfo}
            style={styles.button}
          >
            <Text style={{ color: '#fff', fontWeight: '450' }}>Concluir</Text>
          </TouchableOpacity>

          {this.state.buttonClick && (
            <SafeAreaView style={styles.selectedOptions}>
              <Text style={styles.title}>Informações: </Text>

              <Text><Text style={{ fontWeight: 'bold' }}>Nome: </Text>{this.state.name}</Text>

              <Text><Text style={{ fontWeight: 'bold' }}>Curso: </Text>{this.state.cursos[this.state.curso].name}</Text>

              <Text><Text style={{ fontWeight: 'bold' }}>Período: </Text>{this.state.periodos[this.state.periodo].number} </Text>

              <Text><Text style={{ fontWeight: 'bold' }}>Turno: </Text>{this.state.turnos[this.state.turno].description}</Text>
            </SafeAreaView>
          )}
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  menuOptions: {
    display: 'flex',
    alignSelf: 'center',
    margin: 20,
    backgroundColor: 'rebeccapurple'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10
  },
  button: {
    backgroundColor: 'greenyellow',
    borderRadius: 4,
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  picker: {
    height: 30,
    borderColor: 'greenyellow',
    borderWidth: 2,
    borderRadius: 4,
    padding: 5
  },
  pickerText: {
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5
  },
  selectedOptions: {
    marginTop: 20
  }
});
