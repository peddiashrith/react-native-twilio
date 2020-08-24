/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Intro from './Intro';
import Example from './Example';

const App: () => React$Node = () => {
  return (
    <>
      <Example></Example>
    </>
  );
};

export default App;
