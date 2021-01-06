import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import { Button, Label } from './styles';

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home'
  },
  'Cartões': {
    lib: FontAwesome,
    name: 'credit-card'
  },
  Faturas: {
    lib: AntDesign,
    name: 'file1'
  },
  Perfil: {
    lib: MaterialCommunityIcons,
    name: 'account-box-outline'
  }
}

export default function TabButton({ onPress, focused, pageTitle }) {
  const { lib: Icon, name } = icons[pageTitle];
  
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button focused={focused}>
        <Icon name={name} size={30} color={`${focused ? '#fff' : '#F0F0F0'}`} />
        <Label focused={focused}>{pageTitle}</Label>
      </Button>
    </TouchableWithoutFeedback>
  )
}