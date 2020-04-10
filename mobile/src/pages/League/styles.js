import styled from 'styled-components';

import {SvgUri} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 30px;
`;

export const Icone = styled(SvgUri)`
  margin-top: 5px;
  width: 100px;
  height: 100px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  padding: 10px 30px 30px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #fff;
  align-self: center;
  padding: 8px;
`;

export const Card = styled(TouchableOpacity)`
  margin-bottom: 12px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  margin: 5px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #680f88;
`;

export const Pontuacao = styled.Text`
  color: #777;
  font-size: 13px;
  margin-top: 4px;
`;
