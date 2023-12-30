import { BookmarkLogo } from 'Assets'
import React from 'react'

function Header() {
  return (
    <header className='header'>
      <a href='/'>
        <BookmarkLogo />
      </a>
      <nav className='header__nav'>
        <a href='#features'>FEATURES</a>
        <a href='#pricing'>PRICING</a>
        <a href='#contact'>CONTACT</a>
        <a href='#login' className='button--red'>LOGIN</a>
      </nav>
    </header>
  )
}

export default Header
