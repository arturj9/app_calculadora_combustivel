import { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import ModalContent from './src/ModalContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      melhorOpcao: '',
      precoAlcool: '',
      precoGasolina: '',
    };
    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    if(this.state.precoAlcool === '' || this.state.precoGasolina === '') {
      alert('Por favor, preencha os preços dos combustíveis.');
      return;
    }
    const { precoAlcool, precoGasolina } = this.state;
    const melhorOpcao =
      precoAlcool / precoGasolina < 0.7 ? 'Álcool' : 'Gasolina';
    this.setState({ melhorOpcao, modalVisible: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Image
            source={require('./src/img/logo.png')}
            style={styles.bannerImage}
            resizeMode="contain"
          />
          <Text style={styles.bannerText}>Qual melhor opção?</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.itemForm}>
            <Text style={styles.label}>Álcool (preço por litro):</Text>
            <TextInput style={styles.input} value={this.state.precoAlcool} onChangeText={(text) => {
              if(!isNaN(text)) {
                this.setState({ precoAlcool: text })
              }
            }} />
          </View>
          <View style={styles.itemForm}>
            <Text style={styles.label}>Gasolina (preço por litro):</Text>
            <TextInput style={styles.input} value={this.state.precoGasolina} onChangeText={(text) => {
              if(!isNaN(text)) {
                this.setState({ precoGasolina: text })
              }
            }} />
          </View>
          <TouchableOpacity onPress={this.calcular} style={styles.button}>
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({ modalVisible: false });
          }}
        >
          <ModalContent
            combustivel={this.state.melhorOpcao}
            precoAlcool={this.state.precoAlcool}
            precoGasolina={this.state.precoGasolina}
            onClose={() => this.setState({ modalVisible: false })}
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    color: '#FFFFFF',
    justifyContent: 'center',
  },
  banner: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 72,
  },
  bannerImage: {
    width: 150,
    height: 150,
  },
  bannerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  itemForm: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 5,
    fontSize: 20,
    color: '#212121',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#EF4130',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
