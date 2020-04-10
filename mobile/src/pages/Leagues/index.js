import React, {useEffect, useState} from 'react';

import {withNavigationFocus} from '@react-navigation/compat';

import api from '../../services/api';
import Background from '../../components/SignedBackground';

import {
  Container,
  FormInput,
  SubmitButton,
  List,
  Card,
  Icone,
  Left,
  Info,
  Name,
  Description,
} from './styles';

function Leagues({isFocused, route, navigation}) {
  const [leagues, setLeagues] = useState([]);
  const [searchLeagues, setSearchLeagues] = useState([]);
  const [search, setSearch] = useState('');

  async function loadLeagues() {
    const response = await api.get('leagues');
    setLeagues(response.data);
    setSearchLeagues(response.data);
  }

  useEffect(() => {
    function filterLeague() {
      if (!search) {
        setSearchLeagues(leagues);
      }
      const filteredLeague = leagues.filter(function(test) {
        return test.name.toLowerCase().includes(search.toLowerCase());
      });
      setSearchLeagues(filteredLeague);
    }
    filterLeague();
  }, [search]);

  useEffect(() => {
    if (isFocused) {
      loadLeagues();
    }
  }, [isFocused]);

  function handleCreateLeague() {}

  return (
    <Background>
      <Container>
        <FormInput
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Buscar"
          value={search}
          onChangeText={text => setSearch(text)}
        />
        <SubmitButton
          onPress={() => {
            navigation.navigate('NovaLiga');
          }}>
          Criar uma Liga
        </SubmitButton>

        <List
          data={searchLeagues}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Card
              onPress={() => {
                navigation.navigate('Liga', {id: item.id, name: item.name});
              }}>
              <Icone
                uri={`https://www.tinygraphs.com/labs/isogrids/hexa16/${item.name}/?theme=duskfalling&numcolors=4&size=65`}
              />
              <Left>
                <Info>
                  <Name>{item.name}</Name>
                  <Description>{item.description}</Description>
                </Info>
              </Left>
            </Card>
          )}
        />
      </Container>
    </Background>
  );
}
export default withNavigationFocus(Leagues);
