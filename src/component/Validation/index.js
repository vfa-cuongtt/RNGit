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

const REGEX_EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default class Validation extends Component {
  state = {
    email: '',
    password: '',
    emailErr: '',
    passErr: '',
  };

  /**
   * Handle submit
   */
  handleSubmit = () => {
    // console.log(!!''.length); //=> ep kieu ve boolen (Force Boolen)

    if (!this.state.email.trim().length) {
      this.setState({emailErr: 'Email Khong dc bo trong'});
    } else if (!REGEX_EMAIL.test(this.state.email.trim())) {
      this.setState({emailErr: 'Email Khong Hop le'});
    } else {
      this.setState({emailErr: ''});
    }

    if (!this.state.password.trim().length) {
      this.setState({passErr: 'Password Khong dc bo trong'});
    } else if (
      this.state.password.trim().length < 5 ||
      this.state.password.trim().length > 8
    ) {
      this.setState({passErr: 'Password se tu 5 den 8 ky tu'});
    } else {
      this.setState({passErr: ''});
    }
  };

  /**
   * Handle check out focus and show err
   */
  handleBlur = () => {
    if (!this.state.email.trim().length) {
      this.setState({emailErr: 'Email Khong dc bo trong'});
    }

    if (!this.state.password.trim().length) {
      this.setState({passErr: 'Password Khong dc bo trong'});
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loginForm}>
          <Text> Login Form</Text>
          <View style={styles.inputContainer}>
            <Text>Email</Text>
            <TextInput
              style={[
                styles.inputField,
                this.state.emailErr && styles.inputError,
              ]}
              value={this.state.email}
              placeholder="example@gmail.com"
              onChangeText={text => {
                this.setState({email: text, emailErr: false});
              }}
              onBlur={this.handleBlur} //=> check out focus
            />
            {/* {!!this.state.emailErr.length && (
                    <Text style={styles.errText}>{this.state.emailErr}</Text>
                  )} */}
          </View>
          <View style={styles.inputContainer}>
            <Text>Password</Text>
            <TextInput
              style={[
                styles.inputField,
                this.state.passErr && styles.inputError,
              ]}
              value={this.state.password}
              placeholder="*****"
              secureTextEntry={true} //=> danh cho Password
              onChangeText={text => {
                this.setState({password: text, passErr: false});
              }}
              onBlur={this.handleBlur}
            />
            {!!this.state.passErr.length && (
              <Text style={styles.errText}>{this.state.passErr}</Text>
            )}
          </View>
          <TouchableOpacity
            style={styles.signInBtn}
            onPress={this.handleSubmit}>
            <Text>Sign in</Text>
          </TouchableOpacity>
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
