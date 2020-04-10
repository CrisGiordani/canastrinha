import React, {useMemo, useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Alert} from 'react-native';

import api from '../../services/api';

import {Card, Text, CancelButton, SubmitButton} from './styles';

export default function LeagueActions({id}) {
  const player = useSelector(state => state.player.player);

  const [leagueInfo, setLeagueInfo] = useState([]);
  const [leagueAuth, setLeagueAuth] = useState([]);

  useEffect(() => {
    async function loadLeagueInfo() {
      const response = await api.get(`players/${player.id}/leagues/${id}`);
      if (response.data) {
        setLeagueInfo(response.data);
      } else {
        setLeagueInfo({level: null});
      }
    }
    loadLeagueInfo();
  }, []);

  useEffect(() => {
    async function loadLeagueAuth() {
      const response = await api.get(`players/${player.id}/authorizations`);
      if (response.data) {
        setLeagueAuth(response.data);
      } else {
        setLeagueAuth({level: null});
      }
    }
    loadLeagueAuth();
  }, []);

  function handleJoin() {
    Alert.alert(
      'Participar da Liga',
      'Enviar convite para entrar nesta liga?',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
            async function exitLeague() {
              const response = await api.post(`players/join/${id}`);
            }
            exitLeague();
          },
        },
      ],
    );
  }

  function handleExit() {
    Alert.alert(
      'Sair da Liga',
      'Tem certeza que deseja sair dessa liga? \n\n ATENÇÃO:\n Ao sair seus jogos nessa liga serão excluídos.',
      [
        {
          text: 'Continuar na Liga',
          style: 'cancel',
        },
        {
          text: 'Sair mesmo assim',
          onPress: () => {
            async function exitLeague() {
              const response = await api.delete(`players/exit/${id}`);
              navigation.goBack();
            }
            exitLeague();
          },
        },
      ],
    );
  }

  return (
    <Card>
      {
        {
          null: (
            <>
              <SubmitButton onPress={handleJoin}>Solicitar Acesso</SubmitButton>
            </>
          ),
          0: (
            <>
              <Text>Aguardando autorização de um administrador</Text>
            </>
          ),
          1: (
            <>
              <Text>VOCÊ É MEMBRO DA LIGA</Text>
              <CancelButton onPress={handleExit}>Sair</CancelButton>
            </>
          ),
          2: (
            <>
              <Text>VOCÊ É ADMINISTRADOR DA LIGA</Text>
              <CancelButton onPress={handleExit}>Sair</CancelButton>
            </>
          ),
          3: (
            <>
              <Text>VOCÊ É O PRESIDENTE DA LIGA</Text>
              <CancelButton onPress={handleExit}>Sair</CancelButton>
            </>
          ),
        }[leagueInfo.level]
      }
    </Card>
  );
}
