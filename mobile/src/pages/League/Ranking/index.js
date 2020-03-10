import React, {useEffect, useState} from 'react';

import api from '../../../services/api';

import Background from '../../../components/SignedBackground';

import {
  Container,
  Title,
  SubTitle,
  List,
  Card,
  Left,
  Avatar,
  Info,
  Name,
  Pontuacao,
} from './styles';

export default function Ranking({route, navigation}) {
  const [players, setPlayers] = useState([]);
  const [nameLeague, setNameLeague] = useState(route.params.name);
  useEffect(() => {
    async function loadPlayers() {
      const response = await api.get(`/leagues/${route.params.id}/ranking`);
      setPlayers(response.data);
      //console.log(response.data);
    }
    loadPlayers();
  }, []);

  return (
    <Background>
      <Container>
        <Title>Ranking</Title>
        <SubTitle>{nameLeague}</SubTitle>
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
              <Pontuacao>{item.player.score}</Pontuacao>
            </Card>
          )}
        />
      </Container>
    </Background>
  );
}
