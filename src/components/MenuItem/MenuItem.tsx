import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Animated, Dimensions } from 'react-native';
import styles from './MenuItem.style';
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

const MenuItem: React.FC<Menu> = ({ id, name, img, subMenus, onSubMenuClick }) => {
  const [activeSubMenuId, setActiveSubMenuId] = useState<number | null>(null);
  const [activeSubMenuItemId, setActiveSubMenuItemId] = useState<number | null>(null);
  const opacity = new Animated.Value(1);
  const scale = new Animated.Value(1);
  const subMenuScale = new Animated.Value(1);
  const translateX = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: activeSubMenuId !== null && activeSubMenuId !== id ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(scale, {
      toValue: activeSubMenuId === id ? 1.1 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateX, {
      toValue: activeSubMenuId === id && id === subMenus.length - 1 ? -100 : 0, 
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [activeSubMenuId]);

  useEffect(() => {
    Animated.timing(subMenuScale, {
      toValue: activeSubMenuItemId !== null ? 1.1 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [activeSubMenuItemId]);

  return (
    <Animated.View
      style={[
        styles.menuItem,
        { 
          opacity: opacity, 
          zIndex: activeSubMenuId === id ? 1 : 0, 
          transform: [{ scale: scale }, { translateX: translateX }] 
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => setActiveSubMenuId(activeSubMenuId === id ? null : id)}
      >
        <Image source={img} style={styles.icon} />
        <Text style={styles.menuText}>{name}</Text>
      </TouchableOpacity>

      {activeSubMenuId === id && (
        <ScrollView 
          style={styles.subMenuContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
            {subMenus.map(subMenu => (
              <Animated.View
                style={[
                  { transform: [{ scale: subMenu.id === activeSubMenuItemId ? subMenuScale : 1 }] },
                ]}
              >
                <TouchableOpacity
                  key={subMenu.id}
                  onPress={() => {
                    if(onSubMenuClick) onSubMenuClick(subMenu);
                    setActiveSubMenuItemId(subMenu.id);
                  }}
                >
                  <Image source={subMenu.img} style={styles.subIcon} />
                  <Text style={styles.subMenuText}>{subMenu.subMenuName}</Text>
                </TouchableOpacity>
              </Animated.View>
            ))}
        </ScrollView>
      )}
    </Animated.View>
  );
};

export default MenuItem;
