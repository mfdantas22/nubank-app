import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Touchable, Image } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.img} source={require('././assets/nubank-logo-branco.png')} />
      </View>
      <View>
        <Text style={styles.saudacao}>Olá, Felipe Melo</Text>
      </View>
      <View>
        <TextInput style={styles.search} placeholderTextColor={'#FFFFFF'} placeholder='Procurar...'></TextInput>
      </View >
      <View style={styles.creditCard}>
        <Text style={styles.title}>Cartão de crédito</Text>
        <Text style={styles.subTitle}>Fatura</Text>
        <Text style={styles.credito}>R$ 1.500,00</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Pagar Fatura</Text>
        </TouchableOpacity>
      </View >
      <View style={styles.creditCard}>
        <Text style={styles.title}>Conta</Text>
        <Text style={styles.subTitle}>Saldo Disponível</Text>
        <Text style={styles.saldo}>R$ 300,00</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Transferir </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.btnCard}>
          <Text style={styles.btnTextCard}>Meus Cartões</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B03BB',
    padding: 30,
  },
  img: {
    width: 120,
    height: 50,
  },
  logo: {
    alignItems: 'center',
    paddingTop: 35,
    marginBottom: 10,
  },
  saudacao: {
    color: '#FFFFFF',
    fontSize: 17,
  },
  search: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    color: '#FFFFFF',
    fontSize: 15,
    marginTop: 20,
    marginBottom: 30,
  },
  creditCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 10,
    marginBottom: 30,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  subTitle:{
    fontSize: 15,
    marginBottom: 10,
  },
  credito: {
    fontWeight: 'bold',
    color: '#0099CC',
    fontSize: 28,
  },
  saldo: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 28,
  },
  btnCard: {
    backgroundColor: '#0099CC',
    padding: 16,
    borderRadius: 30,
  },
  btnTextCard: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btn: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#8B03BB',
    width: 130,
    padding: 10,
    marginTop: 15,
    marginBottom: 5,
  },
  btnText: {
    fontSize: 16,
    color: '#8B03BB',
    textAlign: 'center',
  }
}
);
