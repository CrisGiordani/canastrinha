import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

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
  margin-bottom: 12px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;

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
export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #222;
`;

export const Pontuacao = styled.Text`
  color: #777;
  font-size: 13px;
  margin-top: 4px;
`;
