import React, {useMemo, useEffect, useState} from 'react';

import {parseISO, formatRelative} from 'date-fns';
import {ptBR} from 'date-fns/locale';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Card, Team, Info, Pontuacao, Text} from './styles';

export default function Rounds({data}) {
  const [iconA, setIconA] = useState('remove');
  const [iconB, setIconB] = useState('remove');
  const [colorA, setColorA] = useState('#EEE');
  const [colorB, setColorB] = useState('#EEE');
  useEffect(() => {
    function checkWinner() {
      const placarA = parseInt(data.partial_a);
      const placarB = parseInt(data.partial_b);

      if (placarA > placarB) {
        setIconA('grade');
        setColorA('#751c95');
        setIconB('remove');
        setColorB('#EEE');
      } else if (placarA < placarB) {
        setIconA('remove');
        setColorA('#EEE');
        setIconB('grade');
        setColorB('#751c95');
      } else {
        setIconA('remove');
        setIconB('remove');
        setColorA('#751c95');
        setColorB('#751c95');
      }
    }
    checkWinner();
  }, []);

  return (
    <Card>
      <Team>
        <Icon name={iconA} size={22} color={colorA} />
      </Team>
      <Info>
        <Pontuacao>
          {data.partial_a}
          <Text> x </Text>
          {data.partial_b}
        </Pontuacao>
      </Info>
      <Team>
        <Icon name={iconB} size={22} color={colorB} />
      </Team>
    </Card>
  );
}
