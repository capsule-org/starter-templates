import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
} from 'react-native';
import PolyfillCrypto from 'react-native-webview-crypto';
import Config from 'react-native-config';
import {CapsuleMobile, Environment} from '@usecapsule/react-native-wallet';
import {webcrypto} from 'crypto';
import {Passkey} from '@usecapsule/react-native-passkey';

const capsuleClient = new CapsuleMobile(
  Environment.BETA,
  Config.CAPSULE_API_KEY,
  undefined,
  {
    disableWorkers: true,
  },
);

function App(): React.JSX.Element {
  const [email, setEmail] = useState('testtest21@test.usecapsule.com');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [verificationCode, setVerificationCode] = useState('111111');
  const [showVerificationCodeInput, setShowVerificationCodeInput] =
    useState(false);

  useEffect(() => {
    capsuleClient.init();
  }, []);

  const handleCreateAccount = async () => {
    try {
      await capsuleClient.createUser(email);
      setShowVerificationCodeInput(true);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleVerifyCode = async () => {
    try {
      const biometricsId = await capsuleClient.verifyEmailBiometricsId(
        verificationCode,
      );

      console.log('Biometrics ID', biometricsId);

      await capsuleClient.registerPasskey(
        email,
        biometricsId,
        crypto as webcrypto.Crypto,
      );

      const {wallets, recoverySecret} =
        await capsuleClient.createWalletPerType();

      console.log('wallets', wallets);
      console.log('recoverySecret', recoverySecret);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error verifying code:', error);
    }
  };

  const handleLoginWithPasskey = async () => {
    try {
      const wallets = await capsuleClient.login();
      console.log('wallets', wallets);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error during passkey authentication:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <PolyfillCrypto />
      {!isLoggedIn ? (
        showVerificationCodeInput ? (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter verification code"
              value={verificationCode}
              onChangeText={setVerificationCode}
            />
            <Button title="Verify" onPress={handleVerifyCode} />
          </View>
        ) : (
          <View>
            <Button
              title="Login with Passkey"
              onPress={handleLoginWithPasskey}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
            />
            <Button title="Create Account" onPress={handleCreateAccount} />
          </View>
        )
      ) : (
        <View>
          <Text style={styles.text}>Welcome!</Text>
          <Button
            title="Get Wallets"
            onPress={() => console.log(capsuleClient.getWallets())}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
    width: 200,
  },
});

export default App;
