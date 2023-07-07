import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent:'space-evenly', 
    alignItems: 'center', 
    borderWidth: 1,
    borderRadius: 5,
    padding: 5, 
    width: '100%', 
    flexWrap: 'nowrap', 
    backgroundColor:'#4942E4',
    overflow: 'hidden', 

  },
  selectedSubMenu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width:50,
    height:50,
    
  },
  text: {
    color:'#4942E4',
    fontSize:24,
    fontWeight:'700'
  },
});
