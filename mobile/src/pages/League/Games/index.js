import React, {useEffect, useState} from 'react';

import api from '../../../services/api';

import Background from '../../../components/SignedBackground';
import Games from '../../../components/Games';

import {Container, Title, SubTitle, List} from './styles';

export default function Jogos({route, navigation}) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function loadGames() {
      const response = await api.get(`leagues/${route.params.id}/games`);
      setGames(response.data);
    }
    loadGames();
  }, []);

  return (
    <Background>
      <Container>
        <Title>Jogos</Title>
        <SubTitle>{route.params.name}</SubTitle>
        <List
          data={games}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Games data={item} />}
        />
      </Container>
    </Background>
  );
}
