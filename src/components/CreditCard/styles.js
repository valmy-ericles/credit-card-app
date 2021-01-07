import styled from 'styled-components/native';
import { CircleEditButton, CircleTrashButton } from '../../components/CircleButtons';

export const Container = styled.View`
  background: rgba(200, 206, 239, 0.63);
  border-radius: 7px;
  padding: 10px;
  height: 65px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const EditButton = styled(CircleEditButton)`
  margin-right: 10px;
`;

export const TrashButton = styled(CircleTrashButton)`

`;