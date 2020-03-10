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

export const Card = styled.View`
  flex-direction: column;
  margin: 2px 15px;
  padding: 8px;
`;

export const CardTitle = styled.Text`
  font-size: 20px;
  color: #eee;
  font-weight: bold;
  padding: 2px 8px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #fff;
  align-self: center;
  padding: 8px;
`;

export const SignedButton = styled(Button)`
  margin: 5px 30px;
`;
