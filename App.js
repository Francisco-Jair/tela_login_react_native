import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native'
import React from 'react'
import Signin from './src/pages/Signin';

export default function App() {
  return (
    <>
      <Signin />
      <StatusBar style="light" />
    </>
  );
}

