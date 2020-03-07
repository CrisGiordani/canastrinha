import styled from 'styled-components';

export const Card = styled.View`
  margin: -9px 0 12px 0;
  padding: 3px;
  border-radius: 4px;
  background: #fff;
  flex-direction: row;
  align-self: flex-start;
  align-items: center;
`;

export const Info = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;

export const Pontuacao = styled.Text`
  font-weight: bold;
  align-self: center;
  color: #751c95;
  font-size: 20px;
  margin-top: 4px;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #444;
`;

export const Team = styled.View`
  padding: 12px;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  align-items: center;
`;
