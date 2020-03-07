import * as React from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// páginas

import Dashboard from './pages/Dashboard';
import Leagues from './pages/Leagues';
import Players from './pages/Players';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import NewGame from './pages/NewGame';
import StartedGame from './pages/StartedGame';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Routes() {
  const loggedIn = useSelector(state => state.auth.signed);
  const playing = useSelector(state => state.game.playing);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#101010" />
      {loggedIn ? (
        <Drawer.Navigator>
          {playing ? (
            <>
              <Drawer.Screen
                name="Partida iniciada.."
                component={StartedGame}
              />
              <Drawer.Screen name="Dashboard" component={Dashboard} />
            </>
          ) : (
            <>
              <Drawer.Screen name="Dashboard" component={Dashboard} />
              <Drawer.Screen name="Nova partida" component={NewGame} />
            </>
          )}
          <Drawer.Screen name="Perfil" component={Profile} />
          <Drawer.Screen name="Ligas" component={Leagues} />

          <Drawer.Screen name="Jogadores" component={Players} />
        </Drawer.Navigator>
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
