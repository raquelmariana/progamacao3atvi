import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

/*export default function LoginScreen() {
  return (
    <View style={styles.container}>
   
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png' }} 
        style={styles.logo} 
      />

    
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Digite seu email" />
      </View>

     
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />
      </View>

     
      <TouchableOpacity style={styles.buttonLogar}>
        <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCadastrar}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPassword}>esqueceu a senha</Text>
    </View>
  );
}*/
/*export default function cadastro() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} placeholder="Digite seu nome" />
      </View>

       <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Digite seu email" />
      </View>
     
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />
      </View>

      <TouchableOpacity style={styles.buttonCadastrar}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>

    </View>
  );
}*/
export default function esqueceuSenha() {
  return (
    <View style={styles.container}>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Digite seu email" />
      </View>

      <TouchableOpacity style={styles.buttonEnviar}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f62d3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    width: '100%',
  },
  buttonLogar: {
    backgroundColor: '#2ecc71', 
    width: '100%',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonCadastrar: {
    backgroundColor: '#2ecc71',
    width: '100%',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonEnviar: {
    backgroundColor: '#2ecc71',
    width: '100%',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 15,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  }
});