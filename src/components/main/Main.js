import React from 'react'
import UserForm from './userForm/UserForm'
import BookingSummary from './bookingSummary/BookingSummary'

function Main() {
  return (
    <div className="mainContainer">
      <UserForm></UserForm>
      <BookingSummary></BookingSummary>
    </div>
  )
}

export default Main
