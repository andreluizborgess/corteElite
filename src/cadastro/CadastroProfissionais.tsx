import React, {useState}from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";


function CadastroProfissionais(): JSX.Element {

    const[email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [nome,setNome]=useState("");
    const [celular,setCelular]=useState("");
    const [cpf,setCpf]=useState("");
    const [dataNascimento,setDataNascimento]=useState("");
    const [cidade,setCidade]=useState("");
    const [estado,setEstado]=useState("");
    const [pais,setPais]=useState("");
    const [rua,setRua]=useState("");
    const [numero,setNumero]=useState("");
    const [bairro,setBairro]=useState("");
    const [cep,setCep]=useState("");
    const [complemento,setComplemento]=useState("");
    const [salario,setSalario]=useState("");



    function login(){
        const dados ={
            email:email,
            password:password,
            nome:nome,
            cpf:nome,
            dataNascimento:dataNascimento,
            cidade:cidade,
            estado:estado,
            pais:pais,
            rua:rua,
            numero:numero,
            bairro:bairro,
            cep:cep,
            complemento:complemento,
            salario:salario
        }
        console.log(dados);
        
    }
    return (
        <ScrollView style={{height: '100%', width: 'auto'}}>

        <View style={styles.container}>            
            <View style={styles.card}>
                <Text style={styles.title}>Cadastro Profissionais</Text>

                <TextInput
                    style={styles.input}
                    placeholder="nome" placeholderTextColor={"#151413"}onChangeText={(textNome)=> setEmail(textNome)}></TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail" placeholderTextColor={"#151413"}onChangeText={(textEmail)=> setEmail(textEmail)}></TextInput>
                 
                 <TextInput
                    style={styles.input}
                    placeholder="celular" placeholderTextColor={"#151413"}onChangeText={(textCelular)=> setCelular(textCelular)}></TextInput>

                <TextInput
                    style={styles.input}
                    placeholder="cpf" placeholderTextColor={"#151413"}onChangeText={(textCpf)=> setCpf(textCpf)}></TextInput>


                <TextInput
                    style={styles.input}
                    placeholder="data de nascimento" placeholderTextColor={"#151413"}onChangeText={(textDataNascimento)=> setDataNascimento(textDataNascimento)}></TextInput>

                <TextInput
                    style={styles.input}
                    placeholder="cidade" placeholderTextColor={"#151413"}onChangeText={(textCidade)=> setCidade(textCidade)}></TextInput>

                <TextInput
                    style={styles.input}
                    placeholder="estado" placeholderTextColor={"#151413"}onChangeText={(textEstado)=> setEstado(textEstado)}></TextInput>

                <TextInput
                    style={styles.input}
                    placeholder="pais" placeholderTextColor={"#151413"}onChangeText={(textPais)=> setPais(textPais)}></TextInput>


                <TextInput
                    style={styles.input}
                    placeholder="rua" placeholderTextColor={"#151413"}onChangeText={(textRua)=> setRua(textRua)}></TextInput>

                <TextInput
                    style={styles.input}
                    placeholder="numero" placeholderTextColor={"#151413"}onChangeText={(textNumero)=> setNumero(textNumero)}></TextInput>

                <TextInput
                    style={styles.input}
                    placeholder="bairro" placeholderTextColor={"#151413"}onChangeText={(textNumero)=> setNumero(textNumero)}></TextInput>

                <TextInput
                    style={styles.input}
                    placeholder="cep" placeholderTextColor={"#151413"}onChangeText={(textCep)=> setCep(textCep)}></TextInput>

                <TextInput
                    style={styles.input}
                    placeholder="complemento" placeholderTextColor={"#151413"}onChangeText={(textComplemento)=> setComplemento(textComplemento)}></TextInput>

                <TextInput
                    style={styles.input}
                    placeholder="Senha" placeholderTextColor={"#151413"}onChangeText={(textPassword)=> setPassword(textPassword)}
                    secureTextEntry></TextInput>

                <TextInput
                    style={styles.input}
                    placeholder="salário" placeholderTextColor={"#151413"}onChangeText={(textSalario)=> setSalario(textSalario)}></TextInput>
    

                <TouchableOpacity style={styles.button}  onPress={()=>{login()}}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                
            </View>
           
        </View>
        </ScrollView>
        
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dec0bc'
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: 300,
        borderRadius: 20,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    }, title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#151413',
        marginBottom: 20,
        textAlign: 'center'
    }, input: {
        backgroundColor: '#D7D4D1',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#000000"
    }, button: {
        backgroundColor: '#dec0bc',
        height: 40,
        borderRadius: 10
    }, buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40,
    },forgotPassword:{
       color:'#dec0bc',
       textAlign:'center',
       marginTop:10,

    },logoInsta:{
width:70,
height:70,
marginBottom:0,
marginTop:10,
alignItems:'center'
    }
});
export default CadastroProfissionais;