import { StyleSheet } from 'react-native';

export const gStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    // position: 'relative',
  },
  registr: {
    flex: 1,
    padding: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // marginTop: 265,
    // top: 265,
    width: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
    // width: '100%',
    height: 812,
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
  text: {
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },
});
