import styled from 'styled-components';

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  padding-top: 30px;
`;
export const SubTitle = styled.Text`
  font-size: 14px;
  color: #eee;
  align-self: center;
  padding-top: 5px;
  padding-bottom: 12px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})``;

export const Card = styled.View`
  margin: 0 3px 5px 3px;
  padding: 10px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Team = styled.View`
  background: #eee;
  padding: 12px;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  align-items: center;
  width: 80px;
`;

export const Player_1 = styled.View`
  align-items: center;
`;
export const Player_2 = styled.View`
  margin-top: 10px;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-top: 5px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #222;
  margin-top: 3px;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #444;
`;

export const Info = styled.View`
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;

export const Pontuacao = styled.Text`
  font-weight: bold;
  flex-direction: row;
  align-self: center;
  color: #751c95;
  font-size: 20px;
  margin-top: 4px;
`;
