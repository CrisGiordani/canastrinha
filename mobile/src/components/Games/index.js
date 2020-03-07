import React, {useMemo, useState, useEffect} from 'react';
import {parseISO, formatRelative} from 'date-fns';
import {ptBR} from 'date-fns/locale';

import {
  Card,
  Team,
  Info,
  Pontuacao,
  Avatar,
  Player_1,
  Player_2,
  Name,
  Text,
} from './styles';

export default function Games({data}) {
  const dateStr = useMemo(() => {
    var adjustDateStr = formatRelative(parseISO(data.updated_at), new Date(), {
      locale: ptBR,
    });

    return adjustDateStr;
  }, [data.updated_at]);

  const [team_a_background, setTeam_a_background] = useState('#EEE');
  const [team_b_background, setTeam_b_background] = useState('#EEE');

  useEffect(() => {
    async function colorTeam() {
      if (data.score_a > 3000 || data.score_b > 3000) {
        if (data.score_a > data.score_b) {
          setTeam_a_background('#36bb36');
        } else if (data.score_a < data.score_b) {
          setTeam_b_background('#36bb36');
        } else {
          setTeam_a_background('#36bb36');
          setTeam_b_background('#36bb36');
        }
      }
    }
    colorTeam();
  }, []);

  return (
    <Card>
      <Team
        style={{
          backgroundColor: `${team_a_background}`,
        }}>
        <Player_1>
          <Avatar
            source={{
              uri: data.p_a1.avatar
                ? `http://localhost:3333/files/${data.p_a1.avatar}`
                : `https://api.adorable.io/avatars/50/${data.p_a1.name}.png`,
            }}
          />
          <Name>{data.p_a1.name.split(' ')[0]}</Name>
        </Player_1>
        <Player_2>
          <Avatar
            source={{
              uri: data.p_a2.avatar
                ? `http://localhost:3333/files/${data.p_a2.avatar}`
                : `https://api.adorable.io/avatars/30/${data.p_a2.name}.png`,
            }}
          />
          <Name>{data.p_a2.name.split(' ')[0]}</Name>
        </Player_2>
      </Team>
      <Info>
        <Pontuacao>
          {data.score_a}
          <Text> x </Text>
          {data.score_b}
        </Pontuacao>
        <Text>{dateStr}</Text>
      </Info>

      <Team style={{backgroundColor: `${team_b_background}`}}>
        <Player_1>
          <Avatar
            source={{
              uri: data.p_b1.avatar
                ? `http://localhost:3333/files/${data.p_b1.avatar}`
                : `https://api.adorable.io/avatars/50/${data.p_b1.name}.png`,
            }}
          />
          <Name>{data.p_b1.name.split(' ')[0]}</Name>
        </Player_1>
        <Player_2>
          <Avatar
            source={{
              uri: data.p_b2.avatar
                ? `http://localhost:3333/files/${data.p_b2.avatar}`
                : `https://api.adorable.io/avatars/30/${data.p_b2.name}.png`,
            }}
          />
          <Name>{data.p_b2.name.split(' ')[0]}</Name>
        </Player_2>
      </Team>
    </Card>
  );
}
