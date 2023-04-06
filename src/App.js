import React from 'react'
import Button from './Button'
import Link from './Link'
import Logo from './Logo'
import Header from './Header'
import Footer from './Footer'
import Navigation from './Navigation'
import Input from './Input'


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Logo/>
      <Input/>
      <Button/>
      <Link/>
      <Footer/>
    </div>
  );
}

export default App;
