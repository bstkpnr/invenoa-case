import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import { data } from '../../data/data';
import styles from './MenuItem.style'
import { ScrollView } from 'react-native-gesture-handler';

interface SubMenu {
  id: number;
  subMenuName: string;
  img: any; 
}

interface Menu {
  id: number;
  name: string;
  img: any;
  subMenus: SubMenu[];
  onSubMenuClick?: (subMenu: SubMenu) => void;
}

const MenuItem: React.FC<Menu> = ({ name, img, subMenus, onSubMenuClick }) => {
  const [isActive, setIsActive] = useState(false);
  const [scaleValue] = useState(new Animated.Value(1));

  const onMenuItemPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 1.1,
      useNativeDriver: true,
    }).start();
  };

  const onMenuItemPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1.0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.menuItem}>
      <TouchableOpacity 
        onPressIn={onMenuItemPressIn} 
        onPressOut={onMenuItemPressOut} 
        onPress={() => setIsActive(!isActive)}
        style={{ transform: [{ scale: scaleValue }] }}
      >
        <Image source={img} style={styles.icon} />
        <Text style={styles.menuText}>{name}</Text>
      </TouchableOpacity>

      {isActive && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.subMenuContainer}>
          {subMenus.map((subMenu) => (
            <TouchableOpacity key={subMenu.id} onPress={() => onSubMenuClick ? onSubMenuClick(subMenu) : null}>
              <Image source={subMenu.img} style={styles.subIcon} />
              <Text style={styles.subMenuText}>{subMenu.subMenuName}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default MenuItem;
