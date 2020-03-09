import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TextInput, Platform} from 'react-native';
import api from '../../services/api';

import {
  registerRoundRequest,
  reach3000Request,
  reach3000Failure,
  finishGameRequest,
} from '../../store/modules/game/actions';

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

export default function StartedGame() {
  const dispatch = useDispatch();

  const [game, setGame] = useState([]);
  const [rounds, setRounds] = useState([]);

  const [numRounds, setNumRounds] = useState(0);
  const [calculando, setCalculando] = useState(false);

  const [partial_a, setPartialA] = useState('');
  const [partial_b, setPartialB] = useState('');

  const [winner, setWinner] = useState('');

  useEffect(() => {
    async function updateGame() {
      const response = await api.get('gameplaying');
      setGame(response.data);
      setRounds(response.data[0].rounds);

      if (
        response.data[0].score_a >= 3000 ||
        response.data[0].score_b >= 3000
      ) {
        if (response.data[0].score_a > response.data[0].score_b) {
          setWinner('A');
          dispatch(reach3000Request('Jogo finalizado!', 'Vitória da Dupla A'));
        } else if (response.data[0].score_a < response.data[0].score_b) {
          setWinner('B');
          dispatch(reach3000Request('Jogo finalizado!', 'Vitória da Dupla B'));
        } else {
          setWinner('AB');
          dispatch(
            reach3000Request(
              'Jogo empatado!',
              'O jogo já pode ser encerrado, mas que tal uma rodada de desempate!? Briga! ... Briga! ... Briga! ... Briga! ...',
            ),
          );
        }
      } else {
        dispatch(reach3000Failure());
      }
      setCalculando(false);
    }
    updateGame();
  }, [numRounds]);

  function handleSubmit() {
    setCalculando(true);
    const id_game = game[0].id;
    dispatch(registerRoundRequest(id_game, partial_a, partial_b));
    setPartialA('');
    setPartialB('');
    setTimeout(() => {
      setNumRounds(numRounds + 1);
    }, 5000);
  }

  function handleFinish() {
    const id_game = game[0].id;
    dispatch(finishGameRequest(id_game));
  }
  const loading = useSelector(state => state.auth.loading);
  const reach3000 = useSelector(state => state.game.reach3000);

  return (
    <Background>
      <Container>
        <Title>
          {reach3000
            ? 'Concluído!'
            : calculando
            ? 'Atualizando...'
            : `Iniciado`}
        </Title>
        <List
          data={game}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Games data={item} winner={winner} />}
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
          <Text>Dupla A</Text>
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
          <Text>Dupla B</Text>
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

        {reach3000 ? (
          <>
            <View>
              <SubmitButton loading={loading} onPress={handleSubmit}>
                registrar rodada
              </SubmitButton>
            </View>
            <View>
              <CancelButton loading={loading} onPress={handleFinish}>
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
