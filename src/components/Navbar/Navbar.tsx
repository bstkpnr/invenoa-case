import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import MenuItem from '../MenuItem/MenuItem';
import { data } from '../../data/data';
import styles from './Navbar.style'
const NavBar: React.FC = () => {
    return (
      <View style={styles.menuRow}>
        {data.map((menu, index) => (
          <MenuItem key={index} {...menu} />
        ))}
      </View>
    );
  };

  export default NavBar