import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';

import AppNavigations from '@app/routes/navigators';
import {store} from '@app/store/store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <AppNavigations />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
