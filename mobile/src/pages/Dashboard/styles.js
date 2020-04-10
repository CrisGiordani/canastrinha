import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  padding: 30px 0 20px;
`;
export const SubTitle = styled.Text`
  font-size: 14px;
  color: #eee;
  align-self: center;
  padding-top: 5px;
  padding-bottom: 12px;
`;

export const Notifications = styled.View`
  margin: 10px 30px;
`;

export const Carousel = styled.ScrollView`
  margin: 10px 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
  contentContainerStyle: {
    padding: 30,
    overflow: 'visible',
  },
})`
  max-height: 365px;
`;
