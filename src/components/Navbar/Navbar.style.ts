import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D8D7',
    padding: 10,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    borderWidth: 1,
    borderRadius: 5,
    padding: 5, 
    width: '100%', 
    flexWrap: 'nowrap', 
    backgroundColor:'#FF1D23'

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
    color:'#fff',
    fontSize:24
  },
});
