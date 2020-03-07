import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TextInput, Platform} from 'react-native';
import api from '../../services/api';

import {reached3000Request} from '../../store/modules/game/actions';

import Background from '../../components/SignedBackground';
import Games from '../../components/Games';
import Rounds from '../../components/Rounds';
import Input from '../../components/Input';

import {
  Container,
  Title,
  List,
  Form,
  ViewRounds,
  View,
  Text,
  SubmitButton,
  CancelButton,
} from './styles';

import {registerRound} from '../../store/modules/game/actions';

export default function StartedGame() {
  const [game, setGame] = useState([]);
  const [rounds, setRounds] = useState([]);
  const [numRounds, setNumRounds] = useState(0);
  const [calculando, setCalculando] = useState(false);

  const [partial_a, setPartialA] = useState('');
  const [partial_b, setPartialB] = useState('');

  useEffect(() => {
    async function loadGames() {
      const response = await api.get('gameplaying');
      setGame(response.data);
      setRounds(response.data[0].rounds);
      setCalculando(false);

      if (response.data[0].score_a > 3000 || response.data[0].score_b > 3000) {
        if (response.data[0].score_a > response.data[0].score_b) {
          dispatch(
            reached3000Request('Jogo finalizado!', 'Vitória da Dupla A'),
          );
        } else if (response.data[0].score_a < response.data[0].score_b) {
          dispatch(
            reached3000Request('Jogo finalizado!', 'Vitória da Dupla B'),
          );
        } else {
          dispatch(
            reached3000Request(
              'Jogo empatado!',
              'O jogo já pode ser encerrado, mas que tal uma rodada de desempate!? Briga! ... Briga! ... Briga! ... Briga! ...',
            ),
          );
        }
      }
    }
    loadGames();
  }, [numRounds]);

  const dispatch = useDispatch();

  function handleSubmit() {
    const id_game = game[0].id;
    dispatch(registerRound(id_game, partial_a, partial_b));
    setPartialA('');
    setPartialB('');
    setCalculando(true);
    setTimeout(() => {
      setNumRounds(numRounds + 1);
    }, 5000);
  }

  const loading = useSelector(state => state.auth.loading);
  const reached3000 = useSelector(state => state.game.reached3000);

  return (
    <Background>
      <Container>
        <Title>
          {reached3000
            ? 'Concluído!'
            : calculando
            ? 'Atualizando...'
            : `Iniciado`}
        </Title>
        <List
          data={game}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Games data={item} />}
        />
        <Title>Rodadas</Title>

        <ViewRounds>
          <List
            data={rounds}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => <Rounds data={item} />}
          />
        </ViewRounds>

        <View>
          <Text>Equipe A</Text>
          <Input
            style={{
              height: 40,
              width: 80,
              padding: 6,
            }}
            keyboardType={Platform.OS != 'ios' ? 'numeric' : 'number-pad'}
            returnKeyType="done"
            maxLength={4}
            onChangeText={text => setPartialA(text)}
            placeholder="0"
            value={partial_a}
          />
        </View>
        <View>
          <Text>Equipe B</Text>
          <Input
            style={{
              height: 40,
              width: 80,
              padding: 6,
            }}
            keyboardType={Platform.OS != 'ios' ? 'numeric' : 'number-pad'}
            returnKeyType="done"
            maxLength={4}
            onChangeText={text => setPartialB(text)}
            placeholder="0"
            value={partial_b}
          />
        </View>

        {reached3000 ? (
          <>
            <View>
              <SubmitButton loading={loading} onPress={handleSubmit}>
                registrar rodada
              </SubmitButton>
            </View>
            <View>
              <CancelButton loading={loading} onPress={handleSubmit}>
                encerrar
              </CancelButton>
            </View>
          </>
        ) : (
          <>
            <View>
              <SubmitButton loading={loading} onPress={handleSubmit}>
                registrar rodada
              </SubmitButton>
            </View>
          </>
        )}
      </Container>
    </Background>
  );
}
