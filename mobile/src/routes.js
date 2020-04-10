import * as React from 'react';
import {StatusBar, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// páginas

import Dashboard from './pages/Dashboard';

import Leagues from './pages/Leagues';
import LeaguesCreate from './pages/Leagues/Create';

import League from './pages/League';
import LeagueRanking from './pages/League/Ranking';
import LeaguePlayers from './pages/League/Players';
import LeagueGames from './pages/League/Games';

import Players from './pages/Players';
import Profile from './pages/Profile';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import NewGame from './pages/NewGame';
import StartedGame from './pages/StartedGame';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function RootLeagues() {
  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: false,
        headerStyle: {
          backgroundColor: '#751c95',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Ligas" component={Leagues} />
      <Stack.Screen
        name="Liga"
        component={League}
        options={({route}) => ({title: route.params.name, id: route.params.id})}
      />
      <Stack.Screen
        name="Ranking"
        component={LeagueRanking}
        options={({route}) => ({title: '', id: route.params.id})}
      />
      <Stack.Screen
        name="Jogos"
        component={LeagueGames}
        options={({route}) => ({title: '', id: route.params.id})}
      />
      <Stack.Screen
        name="Integrantes"
        component={LeaguePlayers}
        options={({route}) => ({title: '', id: route.params.id})}
      />
      <Stack.Screen
        name="NovaLiga"
        component={LeaguesCreate}
        options={({route}) => ({title: 'Criar uma Liga'})}
      />
    </Stack.Navigator>
  );
}

export default function Routes() {
  const loggedIn = useSelector(state => state.auth.signed);
  const playing = useSelector(state => state.game.playing);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#101010" />

      {loggedIn ? (
        <>
          <Tab.Navigator
            tabBarOptions={{
              keyboardHidesTabBar: true,
              activeTintColor: '#953cC5',
              inactiveTintColor: 'gray',
              style: {
                backgroundColor: '#101010',
                borderTopWidth: 8,
                borderTopColor: '#101010',
              },
              labelStyle: {
                fontSize: 14,
                fontWeight: 'bold',
              },
            }}>
            {playing ? (
              <>
                <Tab.Screen
                  name="Jogando..."
                  component={StartedGame}
                  options={{
                    tabBarIcon: ({color}) => (
                      <Icon name="favorite" color={color} size={24} />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Painel"
                  component={Dashboard}
                  options={{
                    tabBarIcon: ({color}) => (
                      <Icon name="assessment" color={color} size={24} />
                    ),
                  }}
                />
              </>
            ) : (
              <>
                <Tab.Screen
                  name="Painel"
                  component={Dashboard}
                  options={{
                    tabBarIcon: ({color}) => (
                      <Icon name="assessment" color={color} size={24} />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Jogar"
                  Icon="home"
                  component={NewGame}
                  options={{
                    tabBarIcon: ({color}) => (
                      <Icon name="favorite" color={color} size={24} />
                    ),
                  }}
                />
              </>
            )}
            <Tab.Screen
              name="Ligas"
              component={RootLeagues}
              options={{
                tabBarIcon: ({color}) => (
                  <Icon name="group" color={color} size={24} />
                ),
              }}
            />
            <Tab.Screen
              name="Perfil"
              component={Profile}
              options={{
                tabBarIcon: ({color}) => (
                  <Icon name="face" color={color} size={24} />
                ),
              }}
            />
          </Tab.Navigator>
        </>
      ) : (
        <Stack.Navigator headerMode="none">
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      )}
    </>
  );
}
