import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View, Text } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import ToggleSwitch from 'toggle-switch-react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import Background from '../../components/Background';

import { Container, Form, SubmitButton } from './styles';
import { TextInputMask } from 'react-native-masked-text'
import { Actions } from '../../store/modules/invoices/actions';

const EditInvoice = ({ navigation }) => {
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(Actions.loadInvoiceResquest(1))
    }, [])
  );

  const valueRef = useRef()

  const invoices = useSelector(state => state.invoices)
  
  
  const [paid, setPaid] = useState(invoices.invoice.paid)
  const [creditCard, setCreditCard] = useState(invoices.invoice.creditCard)
  const [dueDate, setDueDate] = useState(invoices.invoice.dueDate)
  const [value, setValue] = useState(invoices.invoice.value)
  
  useEffect(() => {
    const { paid, creditCard, dueDate, value } = invoices.invoice
    setPaid(paid)
    setCreditCard(creditCard)
    setDueDate(dueDate)
    setValue(value)
  }, [invoices.invoice]);

  function handleSubmit() {
    dispatch(Actions.editInvoiceResquest())
  }

  return (
    <Background>
        <Container>
          <Form>
            <View>
              <Text style={styles.labelSwitch}>Fatura paga</Text>
              <ToggleSwitch
                isOn={paid}
                onColor="#56E040"
                offColor="#D8D8D8"
                thumbOffStyle={{
                  backgroundColor: 'rgba(125, 73, 150, 0.87)'
                }}
                thumbOnStyle={{
                  backgroundColor: 'rgba(125, 73, 150, 0.87)'
                }}
                onToggle={isOn => setPaid(isOn)}
              />
            </View>
            
            <DropDownPicker
                items={[
                    {label: 'Nubank', value: 'nubank'},
                    {label: 'Bradesco', value: 'bradesco'},
                    {label: 'Itaú', value: 'itau'},
                    {label: 'Next', value: 'next'},
                ]}
                defaultValue={creditCard}
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

                onChangeItem={item => setCreditCard(item.value)}
            />

            <View style={styles.containerInput}>
              <AntDesign name="calendar" size={25} color="#E0E0E0" />
              <TextInputMask
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY'
                }}
                style={styles.input}
                placeholder="Dada de vencimento"
                autoCapitalize="none"
                placeholderTextColor='#E7E7E7'
                returnKeyType="next"
                value={dueDate}
                onChangeText={value => setDueDate(value)}
                onSubmitEditing={() => valueRef.current._inputElement.focus()}
              />
            </View>

            <View style={styles.containerInput}>
              <MaterialIcons name={'attach-money'} size={25} color="#E0E0E0" />
              <TextInputMask
                type={'money'}
                style={styles.input}
                placeholder="Valor da fatura"
                maxLength={14}
                autoCapitalize="none"
                placeholderTextColor='#E7E7E7'
                returnKeyType="next"
                ref={valueRef}
                value={value}
                onChangeText={text => setValue(text)}
                onSubmitEditing={handleSubmit}
              />
            </View>

            <SubmitButton loading={invoices.editingInvoice} onPress={handleSubmit}>
              Salvar
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