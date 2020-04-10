import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';

export default Notifications = styled.View`
  margin: 0px 30px;
  padding-top: 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  padding-top: 30px;
`;

export const Card = styled.View`
  padding: 6px;
  border: solid 1px rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const Bold = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
`;

export const ButtonYes = styled(RectButton)`
  margin: 5px;
  width: 40px;
  height: 40px;
  background: #36bb36;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const ButtonNo = styled(RectButton)`
  margin: 5px;
  width: 40px;
  height: 40px;
  background: #f64c75;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const Left = styled.View`
  display: flex;
  margin-left: 8px;
  max-width: 60%;
  flex-direction: column;
`;

export const Right = styled.View`
  display: flex;
  flex-direction: row;
`;
