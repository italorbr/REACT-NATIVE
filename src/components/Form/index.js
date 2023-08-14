import React from "react";
import { TextInput, View, Text, Button } from "react-native";

export default function Form(){
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="Ex. 1.65" keyboardType="numeric"/>
                <Text>Peso</Text>
                <TextInput placeholder="EX. 60" keyboardType="numeric"/>
                <Button title="Calcular IMC"/>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    )
}