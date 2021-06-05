import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email Khong Hop le')
    .required('Email Khong dc bo trong'),
  password: Yup.string().required('Password Khong dc bo trong'),
});

export default class ValidationFormik extends Component {
  handleSubmitFormil = value => {
    console.log(value);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loginForm}>
          <Text> Login Form</Text>
          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={this.handleSubmitFormil}
            validationSchema={loginSchema}>
            {({values, handleSubmit, handleChange, errors}) => (
              <>
                <View style={styles.inputContainer}>
                  <Text>Email</Text>
                  <TextInput
                    style={[
                      styles.inputField,
                      errors.email && styles.inputError,
                    ]}
                    value={values.email}
                    placeholder="example@gmail.com"
                    onChangeText={handleChange('email')}
                  />
                  {errors.email && (
                    <Text style={styles.errText}>{errors.email}</Text>
                  )}
                </View>
                <View style={styles.inputContainer}>
                  <Text>Password</Text>
                  <TextInput
                    style={[
                      styles.inputField,
                      errors.password && styles.inputError,
                    ]}
                    value={values.password}
                    placeholder="*****"
                    secureTextEntry={true} //=> danh cho Password
                    onChangeText={handleChange('password')}
                  />
                  {errors.password && (
                    <Text style={styles.errText}>{errors.password}</Text>
                  )}
                </View>
                <TouchableOpacity
                  style={styles.signInBtn}
                  onPress={handleSubmit}>
                  <Text>Sign in</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginForm: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputField: {
    borderWidth: 1,
    padding: 8,
  },
  inputContainer: {
    padding: 8,
  },
  signInBtn: {
    backgroundColor: '#bffefe',
    padding: 8,
    width: '30%',
    alignItems: 'center',
    marginTop: 8,
    borderRadius: 8,
  },
  inputError: {
    borderColor: 'red',
  },
  errText: {
    color: 'red',
  },
});
