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
  Info,
  Name,
  Pontuacao,
} from './styles';

export default function Jogadores() {
  // const loading = useSelector(state => state.auth.loading);

  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    async function loadLeagues() {
      const response = await api.get('leagues');
      setLeagues(response.data);
    }
    loadLeagues();
  }, []);

  return (
    <Background>
      <Container>
        <Title>Ligas</Title>
        <SubTitle>Participe de uma Liga</SubTitle>
        <List
          data={leagues}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Card>
              <Left>
                <Info>
                  <Name>{item.name}</Name>
                  <Pontuacao>{item.description}</Pontuacao>
                </Info>
              </Left>
            </Card>
          )}
        />
      </Container>
    </Background>
  );
}
