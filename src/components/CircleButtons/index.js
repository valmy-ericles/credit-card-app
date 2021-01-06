import React from 'react';
import { MaterialIcons, Feather } from '@expo/vector-icons';

import { EditButton, TrashButton } from './styles';

export const CircleEditButton = ({ style }) => {
  return (
    <EditButton style={style}>
      <MaterialIcons name="edit" size={24} color="#fff" />
    </EditButton>
  )
}

export const CircleTrashButton = ({ style }) => {
  return (
    <TrashButton style={style}>
      <Feather name="trash-2" size={24} color="#fff" />
    </TrashButton>
  )
}