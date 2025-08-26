import { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

class ModalContent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Image
            source={require('../img/gas.png')}
            style={styles.bannerImage}
            resizeMode="contain"
          />
          <Text style={styles.bannerText}>
            Compensa usar {this.props.combustivel}
          </Text>
        </View>
        <View style={styles.precos}>
          <Text style={styles.precoTitulo}>Com os preços:</Text>
          <Text style={styles.precoTexto}>
            Álcool: {this.props.precoAlcool}
          </Text>
          <Text style={styles.precoTexto}>
            Gasolina: {this.props.precoGasolina}
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.props.onClose}>
          <Text style={styles.buttonText}>Calcular novamente</Text>
        </TouchableOpacity>
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
    marginBottom: 24,
  },
  bannerImage: {
    width: 150,
    height: 150,
  },
  bannerText: {
    color: '#30EF5A',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  precos: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  precoTitulo: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  precoTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    marginVertical: 5,
  },
  button: {
    borderWidth: 1,
    borderColor: '#EF4130',
    borderRadius: 5,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 72,
  },
  buttonText: {
    color: '#EF4130',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ModalContent;
