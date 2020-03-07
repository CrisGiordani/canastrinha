import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'canastrinha',
      storage: AsyncStorage,
      whitelist: ['auth', 'player', 'game'],
    },
    reducers,
  );
  return persistedReducer;
};
