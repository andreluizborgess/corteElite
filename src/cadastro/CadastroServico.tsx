import React, {useState}from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";


function CadastroServicos(): JSX.Element {

    
    const [nome,setNome]=useState("");
    const [descricao,setDescricao]=useState("");
    const [duracao,setDuracao]=useState("");
    const [preco,setPreco]=useState("");
    


    function login(){
        const dados ={
            
            nome:nome,
            descricao:descricao,
            duracao:duracao,
            preco:preco
            
        }
        console.log(dados);
        
    }
    return (
        
        <View style={styles.container}>            
            <View style={styles.card}>
                <Text style={styles.title}>Cadastro Serviço</Text>

                <TextInput
                    style={styles.input}
                    placeholder="nome" placeholderTextColor={"#151413"}onChangeText={(textNome)=> setNome(textNome)}></TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="descricao" placeholderTextColor={"#151413"}onChangeText={(textDescricao)=> setDescricao(textDescricao)}></TextInput>
                 
                 <TextInput
                    style={styles.input}
                    placeholder="duracao" placeholderTextColor={"#151413"}onChangeText={(textDuracao)=> setDuracao(textDuracao)}></TextInput>

                <TextInput
                    style={styles.input}
                    placeholder="preço" placeholderTextColor={"#151413"}onChangeText={(textPreco)=> setPreco(textPreco)}></TextInput>

                <TouchableOpacity style={styles.button}  onPress={()=>{login()}}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                
            </View>
           
        </View>
        
        
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
export default CadastroServicos;