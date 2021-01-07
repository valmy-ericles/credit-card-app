import React, { useRef, useState } from 'react';

import {
  StyleSheet,
  View,
  Text
} from "react-native";

import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import ToggleSwitch from 'toggle-switch-react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import Background from '../../components/Background';

import { Container, Form, SubmitButton } from './styles';
import { TextInputMask } from 'react-native-masked-text'

const EditInvoice = ({ navigation, modalVisible, hideModal }) => {
  const passwordRef = useRef();
  const cpfRef = useRef();
  const phoneRef = useRef();

  const [cpf, setCPF] = useState('');
  const [value, setValue] = useState('');
  const [activeSwitch, setActiveSwitch] = useState(true)

  function handleSubmit() {

  }

  return (
    <Background>
        <Container>
          <Form>
            <View>
              <Text style={styles.labelSwitch}>Fatura paga</Text>
              <ToggleSwitch
                isOn={activeSwitch}
                onColor="#56E040"
                offColor="#D8D8D8"
                thumbOffStyle={{
                  backgroundColor: 'rgba(125, 73, 150, 0.87)'
                }}
                thumbOnStyle={{
                  backgroundColor: 'rgba(125, 73, 150, 0.87)'
                }}
                onToggle={isOn => setActiveSwitch(isOn)}
              />
            </View>
            
            <DropDownPicker
                items={[
                    {label: 'Nubank', value: 'nubank'},
                    {label: 'Bradesco', value: 'bradesco'},
                    {label: 'Itaú', value: 'itau'},
                    {label: 'Next', value: 'next'},
                ]}
                defaultIndex={0}
                containerStyle={{height: 50, marginVertical: 10 }}
                
                placeholder="Selecione o cartão"
                placeholderStyle={{
                  fontSize: 18,
                  color: '#D8D8D8'
                }}

                style={{
                  backgroundColor: 'rgba(219, 230, 234, 0.33)',
                  borderWidth: 0,
                  borderRadius: 4,
                }}

                labelStyle={{fontSize: 15, color: '#fff'}}
                dropDownStyle={{backgroundColor: 'rgba(125, 73, 150, 0.99)', borderWidth: 0 }}

                onChangeItem={item => console.log(item.label, item.value)}
            />

            <View style={styles.containerInput}>
              <AntDesign name="calendar" size={25} color="#E0E0E0" />
              <TextInputMask
                 type={'datetime'}
                 options={{
                   format: 'DD/MM/YYYY'
                 }}
                value={cpf}
                style={styles.input}
                placeholder="Dada de vencimento"
                autoCapitalize="none"
                placeholderTextColor='#E7E7E7'
                returnKeyType="next"
                onChangeText={text => setCPF(text)}
                ref={cpfRef}
                onSubmitEditing={() => phoneRef.current._inputElement.focus()}
              />
            </View>

            <View style={styles.containerInput}>
              <MaterialIcons name={'attach-money'} size={25} color="#E0E0E0" />
              <TextInputMask
                type={'money'}
                value={value}
                style={styles.input}
                placeholder="Valor da fatura"
                maxLength={14}
                autoCapitalize="none"
                placeholderTextColor='#E7E7E7'
                returnKeyType="next"
                onChangeText={text => setValue(text)}
                ref={phoneRef}
                onSubmitEditing={() => passwordRef.current.focus()}
              />
            </View>

            <SubmitButton onPress={handleSubmit}>
              Adicionar
            </SubmitButton>
          </Form>
        </Container>     
      </Background>
  )
}

const styles = StyleSheet.create({
  containerInput: {
    paddingTop: 0,
    paddingHorizontal: 15,

    backgroundColor: 'rgba(219, 230, 234, 0.33)',
    height: 50,
    borderRadius: 10,

    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 10,
  },

  input: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
    color: '#fff'
  },

  labelSwitch: {
    color: '#fff',
    marginBottom: 5,
  }
});

export default EditInvoice;