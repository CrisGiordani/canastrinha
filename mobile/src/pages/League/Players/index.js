import React, {useEffect, useState} from 'react';

import api from '../../../services/api';

import Background from '../../../components/SignedBackground';

import {
  Container,
  List,
  Title,
  SubTitle,
  Card,
  Left,
  Avatar,
  Info,
  Name,
  Pontuacao,
} from './styles';

export default function LeaguePlayers({route, navigation}) {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    async function loadPlayers() {
      const response = await api.get(`leagues/${route.params.id}/players`);
      setPlayers(response.data);
    }
    loadPlayers();
  }, []);

  return (
    <Background>
      <Container>
        <Title>Integrantes</Title>
        <SubTitle>{route.params.name}</SubTitle>
        <List
          data={players}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Card>
              <Left>
                <Avatar
                  source={{
                    uri: item.player.avatar
                      ? `http://localhost:3333/files/${item.player.avatar}`
                      : `https://api.adorable.io/avatars/50/${item.player.name}.png`,
                  }}
                />

                <Info>
                  <Name>{item.player.name}</Name>
                </Info>
              </Left>
            </Card>
          )}
        />
      </Container>
    </Background>
  );
}
