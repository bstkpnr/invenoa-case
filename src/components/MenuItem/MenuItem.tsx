import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { data } from '../../data/data';
import styles from './MenuItem.style'



interface SubMenu {
  id: number;
  subMenuName: string;
  img: any; 
}

interface Menu {
  name: string;
  img: any;
  subMenus: SubMenu[];
}

const MenuItem: React.FC<Menu> = ({ name, img, subMenus }) => {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <View style={styles.menuItem}>
        <TouchableOpacity onPress={() => setIsActive(!isActive)}>
          <Image source={img} style={styles.icon} />
          <Text style={styles.menuText}>{name}</Text>
        </TouchableOpacity>
  
        {isActive && (
          <View style={styles.subMenuContainer}>
            {subMenus.map((subMenu) => (
              <TouchableOpacity key={subMenu.id}>
                <Image source={subMenu.img} style={styles.icon} />
                <Text style={styles.subMenuText}>{subMenu.subMenuName}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  };

  export default MenuItem