import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    width: Dimensions.get('window').width, 
  },
  menuItem: {
    flexDirection: 'row',
    alignItems:'flex-start',
    padding: 10,
    position: 'relative',
    marginBottom: 10,
    zIndex:1  
  },
  menuText: {
    fontSize: 16,
    color: '#fff',
    marginRight: 5, 
  },
  subMenuContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    borderColor:'#fff',
    position: 'absolute',
    left: 60,
    top: 0,
    overflow: 'visible', 
    zIndex: 2,  
    backgroundColor:'#F5F5F5'
    
  },
  subMenuText: {
    fontSize: 14,
    color: '#4942E4',
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
