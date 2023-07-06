import React from 'react';
import NavBar from './src/components/Navbar/Navbar';
import BottomTabNav from './src/components/TabBar/TabBar';
import { NavigationContainer } from '@react-navigation/native';


const App: React.FC = () => {
  return (
    <NavigationContainer>
    <NavBar />
    <BottomTabNav />
  </NavigationContainer>
  )
  }

export default App;
