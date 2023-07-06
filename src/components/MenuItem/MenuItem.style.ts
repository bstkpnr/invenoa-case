import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,  
    padding: 5,   
  
  },
  menuText: {
    fontSize: 16,    
    color: '#fff',
    marginRight: 5, 
  },
  subMenuContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 10,     
    borderRadius: 10,
    borderColor:'#fff',
    
   
  },
  
  subMenuText: {
    fontSize: 14,    
    color: '#fff',
    marginRight: 5, 
  },
  icon: {
    width: 24,       
    height: 24,
    marginRight: 5,
  },
  subIcon:{
    width: 20,       
    height: 20,
    margin: 3,
    
  }
});