import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  padding-top: 30px;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
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
  padding: 5px;
  margin: 0 10px;
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
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 17px;
  color: #fff;
`;

export const Pontuacao = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-top: 4px;
`;
