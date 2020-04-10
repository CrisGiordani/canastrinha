import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  FlatList,
  Dimensions,
  ScrollView,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import api from '../../services/api';
import Background from '../../components/SignedBackground';
import LeagueAuths from '../../components/LeagueAuths';
import Games from '../../components/Games';

import {Container, Title, List} from './styles';

export default function Dashboard({data}) {
  const [games, setGames] = useState([]);
  const [cardWidth, setCardWidth] = useState(
    Dimensions.get('window').width * 0.85,
  );
  const [cardSpacing, setCardSpacing] = useState(
    Dimensions.get('window').width * 0.1 - 10,
  );

  const {container} = styles;

  useEffect(() => {
    async function loadGames() {
      const response = await api.get('games');
      setGames(response.data);
    }
    loadGames();
  }, []);

  _renderViews = (views: CardType[]): JSX.Element[] => {
    const {cardStyle} = styles;

    return views.map(card => {
      return (
        <View style={cardStyle}>
          <Text>{card.name}</Text>
        </View>
      );
    });
  };

  return (
    <Background>
      <Container>
        <LeagueAuths />
        <Title>Últimos jogos</Title>
        <SafeAreaView style={container}>
          <ScrollView
            horizontal // Change the direction to horizontal
            pagingEnabled // Enable paging
            decelerationRate={0} // Disable deceleration
            snapToInterval={cardWidth + 10} // Calculate the size for a card including marginLeft and marginRight
            snapToAlignment="center" // Snap to the center
            contentInset={{
              // iOS ONLY
              top: 0,
              left: cardSpacing, // Left spacing for the very first card
              bottom: 0,
              right: cardSpacing, // Right spacing for the very last card
            }}
            contentContainerStyle={{
              // contentInset alternative for Android
              paddingHorizontal: Platform.OS === 'android' ? cardSpacing : 0, // Horizontal spacing before and after the ScrollView
            }}>
            {games.map(games => {
              return (
                <View
                  style={{
                    width: cardWidth,
                    height: 180,
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    margin: 5,
                    borderRadius: 4,
                  }}>
                  <Games data={games} />
                </View>
              );
            })}
          </ScrollView>
        </SafeAreaView>
      </Container>
    </Background>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
