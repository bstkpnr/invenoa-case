import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  
      menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
      },
      menuText: {
        fontSize: 16,
        color: '#333',
      },
      subMenuContainer: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: '#f0f0f0',
      },
      subMenuText: {
        fontSize: 14,
        color: '#666',
        marginRight: 5,
      },
      icon: {
        width: 20,
        height: 20,
        marginRight: 5,
      },
});