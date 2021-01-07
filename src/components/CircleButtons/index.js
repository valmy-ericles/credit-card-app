import React from 'react';
import { MaterialIcons, Feather } from '@expo/vector-icons';

import { EditButton, TrashButton } from './styles';

export const CircleEditButton = ({ style, ...rest }) => {
  return (
    <EditButton style={style} {...rest}>
      <MaterialIcons name="edit" size={24} color="#fff" />
    </EditButton>
  )
}

export const CircleTrashButton = ({ style, ...rest }) => {
  return (
    <TrashButton style={style} {...rest}>
      <Feather name="trash-2" size={24} color="#fff" />
    </TrashButton>
  )
}