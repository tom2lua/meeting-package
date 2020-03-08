import React from 'react'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'

function AppLayout() {
  return (
    <div className="appContainer">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default AppLayout
