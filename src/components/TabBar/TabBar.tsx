import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Main() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>AnaSayfa!</Text>
    </View>
  );
}

function Social() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sosyal!</Text>
    </View>
  );
}

function Journal() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bulten!</Text>
    </View>
  );
}

function MyCoupons() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Kuponlarim!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AnaSayfa" component={Main} options={{headerShown:false}} />
      <Tab.Screen name="Sosyal" component={Social} options={{headerShown:false}} />
      <Tab.Screen name="Bulten" component={Journal} options={{headerShown:false}}/>
      <Tab.Screen name="Kuponlarim" component={MyCoupons} options={{headerShown:false}} />
    </Tab.Navigator>
  );
}
