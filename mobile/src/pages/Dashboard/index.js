import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import api from '../../services/api';

import Background from '../../components/SignedBackground';
import Games from '../../components/Games';
import {Container, Title, List} from './styles';

export default function Dashboard({data}) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function loadGames() {
      const response = await api.get('games');
      setGames(response.data);
    }
    loadGames();
  }, []);

  return (
    <Background>
      <Container>
        <Title>Dashboard</Title>
        <List
          data={games}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Games data={item} />}
        />
      </Container>
    </Background>
  );
}
