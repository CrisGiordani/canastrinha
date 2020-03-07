import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import api from '../../services/api';

import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {startGameRequest} from '../../store/modules/game/actions';

import {StyleSheet, Alert} from 'react-native';

import Background from '../../components/SignedBackground';

import {
  Container,
  Title,
  SubTitle,
  SignLink,
  SignLinkText,
  Card,
  CardTitle,
  SignedButton,
  CancelButton,
  Text,
} from './styles';

export default function NewGame({navigation}) {
  const dispatch = useDispatch();

  const [leagues, setLeagues] = useState([]);
  const [players, setPlayers] = useState([]);
  const [selectedLeague, setLeague] = useState(0);

  const player = useSelector(state => state.player.player);

  useEffect(() => {
    async function loadLeagues() {
      const response = await api.get(`leagues/player/${player.id}`);
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
      const response = await api.get(`players/league/${selectedLeague}`);
      let resultPlayers = response.data.map(item => ({
        label: item.player.name,
        value: item.id,
      }));
      console.log(resultPlayers);
      setPlayers(resultPlayers);
    }
    loadPlayers();
  }, [selectedLeague]);

  const placeholder = {
    label: 'Selecione um(a) jogador(a)...',
    value: 0,
  };

  function handleStart() {
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
        <Title>Nova Partida</Title>
        <SubTitle>
          Inicie uma nova partida definindo uma liga e os jogadores de cada
          equipe.
        </SubTitle>
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
                top: 20,
                right: 18,
              },
            }}
            value={selectedLeague}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <Icon name="add" size={24} color="gray" />;
            }}
          />
          <Text>Apenas jogadores da liga selecionada podem jogar</Text>
        </Card>
        <Card>
          <CardTitle>Equipe A</CardTitle>
          <RNPickerSelect
            placeholder={placeholder}
            items={players}
            onValueChange={value => {
              setPlayer_a1(value);
            }}
            style={{
              ...pickerSelectStyles,
              iconContainer: {
                top: 20,
                right: 18,
              },
            }}
            value={player_a1}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <Icon name="add" size={24} color="gray" />;
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
                top: 20,
                right: 18,
              },
            }}
            value={player_a2}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <Icon name="add" size={24} color="gray" />;
            }}
          />
        </Card>
        <Card>
          <CardTitle>Equipe B</CardTitle>
          <RNPickerSelect
            placeholder={placeholder}
            items={players}
            onValueChange={value => {
              setPlayer_b1(value);
            }}
            style={{
              ...pickerSelectStyles,
              iconContainer: {
                top: 20,
                right: 18,
              },
            }}
            value={player_b1}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <Icon name="add" size={24} color="gray" />;
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
                top: 20,
                right: 18,
              },
            }}
            value={player_b2}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <Icon name="add" size={24} color="gray" />;
            }}
          />
        </Card>
        <SignedButton onPress={handleStart}>Iniciar</SignedButton>
        <CancelButton>Cancelar</CancelButton>
      </Container>
    </Background>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    margin: 8,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    margin: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
