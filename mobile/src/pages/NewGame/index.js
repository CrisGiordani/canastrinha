import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import api from '../../services/api';

import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {startGameRequest} from '../../store/modules/game/actions';

import {StyleSheet, Alert} from 'react-native';

import Background from '../../components/SignedBackground';

import {Container, Title, Card, CardTitle, SignedButton, Text} from './styles';

export default function NewGame({navigation}) {
  const dispatch = useDispatch();

  const [leagues, setLeagues] = useState([]);
  const [players, setPlayers] = useState([]);
  const [selectedLeague, setLeague] = useState(0);

  const player = useSelector(state => state.player.player);
  const loading = useSelector(state => state.auth.loading);

  useEffect(() => {
    async function loadLeagues() {
      const response = await api.get(`players/${player.id}/leagues`);
      let resultLeagues = response.data.map(item => ({
        label: item.league.name,
        value: item.id,
      }));
      setLeagues(resultLeagues);
    }
    loadLeagues();
  }, []);

  useEffect(() => {
    async function loadPlayers() {
      const response = await api.get(`leagues/${selectedLeague}/players`);
      let resultPlayers = response.data.map(item => ({
        label: item.player.name,
        value: item.id,
      }));
      setPlayers(resultPlayers);
    }
    loadPlayers();
  }, [selectedLeague]);

  const placeholder = {
    label: 'Selecione um(a) jogador(a)...',
    value: 0,
  };

  function handleStart() {
    if (selectedLeague == 0) {
      Alert.alert(
        'Selecione uma Liga',
        'Para iniciar uma partida, primeiro selecione uma Liga e depois os 4 jogadores distintos',
      );
      return;
    }
    if (player_a1 == 0 || player_a2 == 0 || player_b1 == 0 || player_b2 == 0) {
      Alert.alert(
        'Verifique os Jogadores',
        'A partida não pode ser iniciada sem a escolha dos 4 jogadores',
      );
      return;
    }
    if (
      player_a1 == player_a2 ||
      player_a1 == player_b1 ||
      player_a1 == player_b2 ||
      player_a2 == player_b1 ||
      player_a2 == player_b2 ||
      player_b1 == player_b2
    ) {
      Alert.alert(
        'Jogadores Repetidos',
        'Selecione 4 jogadores distintos para iniciar a partida',
      );
      return;
    }
    dispatch(
      startGameRequest(
        selectedLeague,
        player_a1,
        player_a2,
        player_b1,
        player_b2,
      ),
    );
  }

  const [player_a1, setPlayer_a1] = useState([]);
  const [player_a2, setPlayer_a2] = useState([]);
  const [player_b1, setPlayer_b1] = useState([]);
  const [player_b2, setPlayer_b2] = useState([]);

  return (
    <Background>
      <Container>
        <Title>NOVA PARTIDA</Title>
        <Card>
          <CardTitle>Liga</CardTitle>
          <RNPickerSelect
            placeholder={{label: 'Selecione uma Liga', value: 0}}
            items={leagues}
            onValueChange={value => {
              setLeague(value);
            }}
            style={{
              ...pickerSelectStyles,
              iconContainer: {
                top: 15,
                right: 15,
              },
            }}
            value={selectedLeague}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <Icon name="add" size={24} color="white" />;
            }}
          />
          <Text>
            Apenas jogadores da liga selecionada podem ser escolhidos para
            participar da partida
          </Text>
        </Card>
        <Card>
          <CardTitle>Dupla A</CardTitle>
          <RNPickerSelect
            placeholder={placeholder}
            items={players}
            onValueChange={value => {
              setPlayer_a1(value);
            }}
            style={{
              ...pickerSelectStyles,
              iconContainer: {
                top: 15,
                right: 15,
              },
            }}
            value={player_a1}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <Icon name="add" size={24} color="white" />;
            }}
          />
          <RNPickerSelect
            placeholder={placeholder}
            items={players}
            onValueChange={value => {
              setPlayer_a2(value);
            }}
            style={{
              ...pickerSelectStyles,
              iconContainer: {
                top: 15,
                right: 15,
              },
            }}
            value={player_a2}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <Icon name="add" size={24} color="white" />;
            }}
          />
        </Card>
        <Card>
          <CardTitle>Dupla B</CardTitle>
          <RNPickerSelect
            placeholder={placeholder}
            items={players}
            onValueChange={value => {
              setPlayer_b1(value);
            }}
            style={{
              ...pickerSelectStyles,
              iconContainer: {
                top: 15,
                right: 15,
              },
            }}
            value={player_b1}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <Icon name="add" size={24} color="white" />;
            }}
          />
          <RNPickerSelect
            placeholder={placeholder}
            items={players}
            onValueChange={value => {
              setPlayer_b2(value);
            }}
            style={{
              ...pickerSelectStyles,
              iconContainer: {
                top: 15,
                right: 15,
              },
            }}
            value={player_b2}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <Icon name="add" size={24} color="white" />;
            }}
          />
        </Card>
        <SignedButton onPress={handleStart} loading={loading}>
          Iniciar
        </SignedButton>
      </Container>
    </Background>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: '#680f88',
    fontSize: 17,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 4,
    marginBottom: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 0,
    borderRadius: 4,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    backgroundColor: '#680f88',
    fontSize: 17,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 4,
    marginBottom: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0,
    borderRadius: 8,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
