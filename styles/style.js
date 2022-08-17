import { StyleSheet } from 'react-native';

export const gStyle = StyleSheet.create({
  main: {
    flex: 1,
    // position: 'relative',
  },
  // registr: {
  //   flex: 1,
  //   padding: 16,
  //   borderTopLeftRadius: 25,
  //   borderTopRightRadius: 25,
  // },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100 %',
    height: '100%',
  },
  title: {
    fontSize: 30,
    color: '#333',
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
  textButton: {
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },
});
