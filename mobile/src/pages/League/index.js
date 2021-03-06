import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/SignedBackground';
import LeagueActions from '../../components/LeagueActions';

import {Container, Icone, Title, Text, Card, Left, Info, Name} from './styles';

export default function Liga({route, navigation}) {
  const player = useSelector(state => state.player.player);

  return (
    <Background>
      <Container>
        <Icone
          uri={`https://www.tinygraphs.com/labs/isogrids/hexa16/${route.params.name}/?theme=duskfalling&numcolors=4&size=100`}
        />
        <Title>{route.params.name}</Title>

        <LeagueActions id={route.params.id} />

        <Card
          onPress={() => {
            navigation.navigate('Ranking', {
              id: route.params.id,
              name: route.params.name,
            });
          }}>
          <Left>
            <Info>
              <Name>Ranking</Name>
            </Info>
          </Left>
          <Icon name="list" size={34} color={'#A84fC8'} />
        </Card>

        <Card
          onPress={() => {
            navigation.navigate('Jogos', {
              id: route.params.id,
              name: route.params.name,
            });
          }}>
          <Left>
            <Info>
              <Name>Jogos</Name>
            </Info>
          </Left>
          <Icon name="casino" size={34} color={'#A84fC8'} />
        </Card>

        <Card
          onPress={() => {
            navigation.navigate('Integrantes', {
              id: route.params.id,
              name: route.params.name,
            });
          }}>
          <Left>
            <Info>
              <Name>Integrantes</Name>
            </Info>
          </Left>
          <Icon name="face" size={34} color={'#A84fC8'} />
        </Card>
      </Container>
    </Background>
  );
}
