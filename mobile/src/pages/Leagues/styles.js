import styled from 'styled-components';

import {SvgUri} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin: 10px 30px -5px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})``;

export const Card = styled(TouchableOpacity)`
  margin-bottom: 12px;
  padding: 10px 16px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icone = styled(SvgUri)`
  margin-top: 5px;
  width: 65px;
  height: 65px;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.View`
  margin-left: 15px;
  margin-right: 60px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #222;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #555;
  font-size: 13px;
  margin-top: 2px;
  margin-right: 20px;
`;
