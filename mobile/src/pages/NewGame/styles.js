import {Platform} from 'react-native';
import styled from 'styled-components';
import Button from '../../components/SignedButton';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  padding-top: 30px;
  margin-bottom: 30px;
`;

export const CardTitle = styled.Text`
  font-size: 20px;
  color: #999;
  font-weight: bold;
  padding: 8px;
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  color: #eee;
  align-self: center;
  text-align: center;
  margin: 0px 30px 20px 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const SignedButton = styled(Button)`
  margin-top: 5px;
`;

export const CancelButton = styled(Button)`
  margin-top: 10px;
  background: #fd3c45;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin: 0 auto;
  font-size: 16px;
`;

export const Card = styled.View`
  flex-direction: column;
  margin: 8px 12px;
  padding: 10px;
  border-radius: 4px;
  background: #fff;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #444;
  align-self: center;
  padding-top: 5px;
  padding-bottom: 12px;
`;
