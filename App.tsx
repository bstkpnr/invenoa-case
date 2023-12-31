import React from 'react';
import NavBar from './src/components/Navbar/Navbar';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavBar />
    </GestureHandlerRootView>
  );
};

export default App;
