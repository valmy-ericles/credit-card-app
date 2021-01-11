import React, { useState, useEffect } from 'react';

import { useIsFocused } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import DropDownPicker from 'react-native-dropdown-picker';
import { ConfirmDialog } from 'react-native-simple-dialogs';

import { AntDesign } from '@expo/vector-icons';

import {
  ActionsContainer,
  AddButton,
  Container,
  InvoiceScroll
} from './styles';

import CardInvoice2 from '../../components/CardInvoice2';
import Background from '../../components/Background';

import { Actions } from '../../store/modules/invoices/actions';

const Invoices = ({ route, navigation }) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const invoices = useSelector(state => state.invoices)

  useEffect(() => {
    const kindInvoice = route.params?.kindInvoice || null

    if(!isFocused) return

    if(invoices.allInvoices.length === 0) {
      dispatch(Actions.loadInvoicesResquest())
    }

    if(!kindInvoice) return

    filter(kindInvoice)
    setSelectedFilter(kindInvoice)
  }, [isFocused])

  const [selectedFilter, setSelectedFilter] = useState('all')
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [invoiceIdToDelete, setInvoiceIdToDelete] = useState(false)

  function filter(filterKind) {
    dispatch(Actions.filterInvoicesResquest(filterKind))
  }

  const deleteInvoice = (invoiceId) => {
    setInvoiceIdToDelete(invoiceId)
    setShowDeleteConfirm(true)
  }

  function sendRequestToDelete() {
    dispatch(Actions.deleteInvoiceResquest(invoiceIdToDelete))
    setShowDeleteConfirm(false)
  }

  return (
    <Background loading={invoices.loading}>
      <Container>
        <ActionsContainer>
            <DropDownPicker
              items={[
                  {label: 'Pagas', value: 'paid'},
                  {label: 'Pendentes', value: 'notPaid'},
                  {label: 'Todas', value: 'all'},
              ]}
              defaultValue={selectedFilter}
              containerStyle={{height: 50, width: 300 }}
              
              placeholder="Filtrar por estado"
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

              onChangeItem={item => filter(item.value)}
            />

          <AddButton onPress={() => navigation.navigate('NewInvoice')}>
            <AntDesign name="plus" size={24} color="#fff" />
          </AddButton>

        </ActionsContainer>

        <ConfirmDialog
          title="Deseja apagar essa fatura ?"
          titleStyle={{ color: '#615E86', fontWeight: 'bold' }}
          message="esta ação não poderá ser revertida"
          animationType="fade"
          messageStyle={{ fontSize: 15 }}
          visible={showDeleteConfirm}
          onTouchOutside={() => setShowDeleteConfirm(false)}
          positiveButton={{
              title: "SIM",
              onPress: () => sendRequestToDelete()
          }}
          negativeButton={{
              title: "NÃO",
              onPress: () => setShowDeleteConfirm(false)
          }}
        />

        <InvoiceScroll>
          {
            invoices.filteredInvoices.map(({ id, cardName, dueDate, totalValue, paid }, index) => {
              return (
                <CardInvoice2
                  id={id}
                  navigation={navigation}
                  key={index} 
                  cardName={cardName} 
                  totalValue={totalValue} 
                  dueDate={dueDate} 
                  paid={paid}
                  deleteInvoice={deleteInvoice}
                />
              )
            })
          }
        </InvoiceScroll>
      </Container>     
    </Background>
  )
}

export default Invoices;