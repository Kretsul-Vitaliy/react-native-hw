import { StyleSheet, View } from 'react-native';

export default function Avatar(props) {
  const { stylePosition } = props;
  return <View style={{ ...styles.box, ...stylePosition }}></View>;
}

const styles = StyleSheet.create({
  box: {
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
});
