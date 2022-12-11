import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import RegistrationForm from './components/registrationForm'
const App = () => 
{
  return (
    <div className="App">
      <Header/>
      <RegistrationForm/>
    </div>
  )
}

export default App