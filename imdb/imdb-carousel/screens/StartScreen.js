import React from 'react'

import Background from '../components/Login/Background'
import Logo from '../components/Login/Logo'
import Header from '../components/Login/Header'
import Button from '../components/Login/Button'
import Paragraph from '../components/Login/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>IMDB Sky App</Header>
      <Paragraph>Please enter your login details or sign up! .</Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
