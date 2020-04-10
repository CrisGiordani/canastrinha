import styled from 'styled-components';
import Button from '../../components/SignedButton';

export const Card = styled.View`
  margin: 5px 30px;
  padding: 10px;
  border: solid 1px rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #fff;
  align-self: center;
`;

export const SubmitButton = styled(Button)`
  margin: 10px;
`;

export const CancelButton = styled(Button)`
  margin: 10px;
  background: #f64c75;
`;
