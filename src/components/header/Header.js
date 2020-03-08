import React from 'react'
import Logo from '../../assets/Logo.png'
import { Dropdown } from 'semantic-ui-react'

function Header() {
  const languageOptions = [
    {
      key: 'English',
      text: 'English',
      value: 'English'
    },
    {
      key: 'Finnish',
      text: 'Finnish',
      value: 'Finnish'
    },
    {
      key: 'Vietnamese',
      text: 'Vietnamese',
      value: 'Vietnamese'
    }
  ]

  return (
    <div className="headerContainer">
      <div className="logo">
        <img src={Logo} alt="logo"></img>
      </div>
      <div className="languageDropdown">
        <Dropdown
          inline
          options={languageOptions}
          defaultValue={languageOptions[0].text}
        ></Dropdown>
      </div>
      <div className="loggedInUser">Hi, Nguyen</div>
    </div>
  )
}

export default Header
