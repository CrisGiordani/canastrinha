import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {TextInput} from 'react-native';
import api from '../../services/api';

import Background from '../../components/SignedBackground';
import Games from '../../components/Games';
import Rounds from '../../components/Rounds';

import {Container, Title, List} from './styles';

export default function StartedGame() {
  const [game, setGame] = useState([]);
  const [rounds, setRounds] = useState([]);

  const [scoreA, setScoreA] = useState('0');
  const [scoreB, setScoreB] = useState('0');

  useEffect(() => {
    async function loadGames() {
      const response = await api.get('gameplaying');
      setGame(response.data);
      setRounds(response.data[0].rounds);
    }
    loadGames();
  }, []);

  return (
    <Background>
      <Container>
        <Title>Em andamento...</Title>
        <List
          data={game}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Games data={item} />}
        />
        <Title>Rodadas</Title>
        <List
          data={rounds}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Rounds data={item} />}
        />
        <TextInput
          style={{
            height: 40,
            width: 100,
            padding: 8,
            textAlign: 'center',
            borderColor: 'white',
            borderWidth: 1,
            marginLeft: 30,
          }}
          onChangeText={text => setScoreA(text)}
          value={scoreA}
        />
        <TextInput
          style={{
            height: 40,
            width: 100,
            padding: 8,
            textAlign: 'center',
            borderColor: 'white',
            borderWidth: 1,
            marginLeft: 30,
          }}
          onChangeText={text => setScoreB(text)}
          value={scoreB}
        />
      </Container>
    </Background>
  );
}
