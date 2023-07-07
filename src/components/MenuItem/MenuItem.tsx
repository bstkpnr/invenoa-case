import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
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
  const opacity = new Animated.Value(1);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: activeSubMenuId !== null && activeSubMenuId !== id ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [activeSubMenuId]);

  return (
    <Animated.View
      style={[
        styles.menuItem,
        { opacity: opacity, zIndex: activeSubMenuId === id ? 1 : 0 },
      ]}
    >
      <TouchableOpacity
        onPress={() => setActiveSubMenuId(activeSubMenuId === id ? null : id)}
      >
        <Image source={img} style={styles.icon} />
        <Text style={styles.menuText}>{name}</Text>
      </TouchableOpacity>

      {activeSubMenuId === id && (
        <View style={styles.subMenuContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {subMenus.map(subMenu => (
              <TouchableOpacity
                key={subMenu.id}
                onPress={() => (onSubMenuClick ? onSubMenuClick(subMenu) : null)}
              >
                <Image source={subMenu.img} style={styles.subIcon} />
                <Text style={styles.subMenuText}>{subMenu.subMenuName}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </Animated.View>
  );
};

export default MenuItem;
