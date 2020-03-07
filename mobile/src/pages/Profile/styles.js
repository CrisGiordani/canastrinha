import {Platform} from 'react-native';
import styled from 'styled-components';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 15px;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.4);
  align-self: stretch;
  margin: 20px 0 30px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
  background: #f64c75;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  color: #eee;
  align-self: center;
  padding-top: 5px;
  padding-bottom: 12px;
`;
