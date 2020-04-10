import {Platform} from 'react-native';
import styled from 'styled-components';

import Input from '../../../components/Input';
import Button from '../../../components/SignedButton';

import {SvgUri} from 'react-native-svg';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  padding: 0 30px;
`;

export const Icone = styled(SvgUri)`
  margin: 5px 0 0 3px;
`;

export const IconeView = styled.View`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  margin-top: 50px;
  border: solid 12px #ccc;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  background-color: #680f88;
`;

export const DescriptionArea = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.8)',
})`
  height: 60px;
  margin: 5px 0;
  padding: 10px;
  border-radius: 4px;
  background-color: #680f88;
  color: white;
`;

export const RulesArea = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.8)',
})`
  height: 100px;
  margin: 5px 0;
  padding: 10px;
  border-radius: 4px;
  background-color: #680f88;
  color: white;
`;

export const SubmitButton = styled(Button)`
  margin: 5px 0 0;
`;
