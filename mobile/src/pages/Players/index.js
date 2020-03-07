import React, {useEffect, useState} from 'react';

import api from '../../services/api';

import Background from '../../components/SignedBackground';

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

export default function Jogadores() {
  // const loading = useSelector(state => state.auth.loading);

  const [players, setPlayers] = useState([]);
  useEffect(() => {
    async function loadPlayers() {
      const response = await api.get('players');
      setPlayers(response.data);
    }
    loadPlayers();
  }, []);

  return (
    <Background>
      <Container>
        <Title>Liga do Family</Title>
        <SubTitle>Jogadores</SubTitle>
        <List
          data={players}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Card>
              <Left>
                <Avatar
                  source={{
                    uri: item.avatar
                      ? `http://localhost:3333/files/${item.avatar}`
                      : `https://api.adorable.io/avatars/50/${item.name}.png`,
                  }}
                />

                <Info>
                  <Name>{item.name}</Name>
                  <Pontuacao>Ranking</Pontuacao>
                </Info>
              </Left>
              <Pontuacao>1234</Pontuacao>
            </Card>
          )}
        />
      </Container>
    </Background>
  );
}
