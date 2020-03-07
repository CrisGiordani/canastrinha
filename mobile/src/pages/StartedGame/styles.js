import {Platform} from 'react-native';

import styled from 'styled-components';
import Button from '../../components/Button';
/*
export const Container = styled.SafeAreaView``;
*/

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  padding-top: 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  padding-top: 30px;
`;

export const ViewRounds = styled.View`
  max-height: 300px;
`;

export const Form = styled.View``;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30, marginBottom: -30},
})``;

export const View = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  background: #751c95;
  border-radius: 4px;
  margin: 5px 30px 0 30px;
`;

export const Text = styled.Text`
  font-size: 16px;
  align-self: center;
  margin-right: 10px;
  font-weight: bold;
  color: #fff;
`;

export const SubmitButton = styled(Button)`
  flex: 1;
  background: #36bb36;
`;
export const CancelButton = styled(Button)`
  flex: 1;
  background: #fd3c45;
`;
