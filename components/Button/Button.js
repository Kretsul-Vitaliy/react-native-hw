import { Text, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
  const {
    onPress,
    title = 'Button',
    style = styles.button,
    styleText = styles.text,
  } = props;
  return (
    <Pressable style={style} onPress={onPress}>
      <Text style={styleText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
