import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import MenuItem from '../MenuItem/MenuItem';
import { data } from '../../data/data';
import styles from './Navbar.style'

interface SubMenu {
  id: number;
  subMenuName: string;
  img: any; 
}

const NavBar: React.FC = () => {
  const [selectedSubMenu, setSelectedSubMenu] = useState<SubMenu | null>(null);
  const handleSubMenuClick = (subMenu: SubMenu) => {
    setSelectedSubMenu(subMenu);
  };

  const handleCloseSubMenu = () => {
    setSelectedSubMenu(null);
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        {data.map((menu, index) => (
          <MenuItem id={0} key={index} {...menu} onSubMenuClick={handleSubMenuClick} />
        ))}
      </View>
      {selectedSubMenu && (
        <View style={styles.selectedSubMenu}>
          <Image source={selectedSubMenu.img} style={styles.icon} />
          <Text style={styles.text} onPress={handleCloseSubMenu}>{selectedSubMenu.subMenuName}</Text>
        </View>
      )}
    </View>
  );
};

export default NavBar;
