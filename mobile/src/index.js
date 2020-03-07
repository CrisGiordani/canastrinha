import * as React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import './config/ReactotronConfig';

import {store, persistor} from './store';

import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
