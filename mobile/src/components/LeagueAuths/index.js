import React, {useMemo, useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Alert} from 'react-native';
import {withNavigationFocus} from '@react-navigation/compat';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
  Title,
  List,
  Card,
  Text,
  Bold,
  Left,
  Right,
  ButtonYes,
  ButtonNo,
} from './styles';

function LeagueActions({isFocused, id}) {
  const player = useSelector(state => state.player.player);

  const [leagueAuth, setLeagueAuth] = useState([]);

  async function loadLeagueAuth() {
    const response = await api.get(`leaguesAuthorizations`);
    setLeagueAuth(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadLeagueAuth();
    }
  }, [isFocused]);

  function handleAccept() {}

  function handleDeny() {}

  return (
    <Notifications>
      {leagueAuth.map((item, i) => (
        <Card>
          <Left>
            <Text>
              <Bold>{item.player.name}</Bold> solicitou acesso em
              <Bold> {item.league.name}</Bold>.
            </Text>
          </Left>
          <Right>
            <ButtonNo>
              <Icon name="block" size={18} color={'#fff'} />
            </ButtonNo>
            <ButtonYes>
              <Icon name="check" size={18} color={'#fff'} />
            </ButtonYes>
          </Right>
        </Card>
      ))}
    </Notifications>
  );
}
export default withNavigationFocus(LeagueActions);
