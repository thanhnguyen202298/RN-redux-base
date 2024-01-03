/* eslint-disable react/react-in-jsx-scope */
import {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Login = ({token, login, loading}) => {
  const [usn, setUsn] = useState('');
  const [pwd, setPwd] = useState('');

  const handleChange = useCallback((text) => {
    setUsn(text);
  }, []);

  const handleChangePass = useCallback((text) => {
    setPwd(text);
  }, []);

  useEffect(
    function () {
      const loginAthen = async function () {
        if (!token || token.length < 20) {
          if (usn !== undefined && pwd !== undefined) {
            if (usn !== '' && pwd !== '') {
              login({usn, pass: pwd});
            }
          }
        } else {
          console.log('token ' + token);
        }
      };
      loginAthen();
    },
    [usn, pwd, login, token],
  );

  return (
    <View>
      {!token && (
        <View style={styles.container}>
          <Text>username</Text>
          <TextInput onChangeText={handleChange} placeholder="enter username" />
          <Text>password</Text>
          <TextInput
            onChangeText={handleChangePass}
            placeholder="enter password"
          />
        </View>
      )}
      {token && (
        <Text style={{color: '#0000ff', textAlign: 'center', fontSize: 18}}>
          hello {'\n'} come to dashboard
        </Text>
      )}
      {loading && (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#00aabb" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default Login;
