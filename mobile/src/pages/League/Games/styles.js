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
