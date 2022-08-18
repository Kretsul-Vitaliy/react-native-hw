import { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  Alert,
} from 'react-native';
import { gStyle } from '../../styles/style';
import Avatar from '../Avatar';
import Button from '../Button/Button';

function LoginScreen() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const loginHandler = (text) => setLogin(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);
  const onLogin = () => {
    Alert.alert('Credentials', `${login} + ${email} + ${password}`);
  };

  return (
    <View style={styles.form}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.titleForm}>
          <Text style={gStyle.title}>Реєстрація</Text>
        </View>
        <View>
          <TextInput
            placeholder="Логін"
            value={login}
            onChangeText={loginHandler}
            style={styles.input}
          />
          <TextInput
            placeholder="Адреса електроної пошти"
            value={email}
            onChangeText={emailHandler}
            style={styles.input}
          />
          <TextInput
            placeholder="Пароль"
            value={password}
            onChangeText={passwordHandler}
            style={styles.input}
            secureTextEntry={isSecureEntry}
            iconPosition="right"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={'Зареєструватися'}
            style={styles.button}
            styleText={gStyle.textButton}
            onPress={onLogin}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={gStyle.text}>Вже є акаунт? Увійти</Text>
        </View>
        <Avatar stylePosition={styles.stylePosition} />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    // flex: 1,
    // paddingLeft: 16,
    // paddingRight: 16,
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
    position: 'relative',
    // alignItems: 'center',
    // justifyContent: 'center',
    // top: 265,
    // width: '100%',
  },
  titleForm: {
    paddingTop: 76,
    paddingBottom: 16,
  },
  input: {
    width: '100%',
    height: 50,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 16,
    borderRadius: 8,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  // 'input:last-child': { marginBottom: 0 },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
  },
  buttonContainer: {
    marginVertical: 16,
  },
  textContainer: {
    marginBottom: 16,
  },
  stylePosition: {
    position: 'absolute',
    top: -60,
    alignSelf: 'center',
  },
});

export default LoginScreen;
