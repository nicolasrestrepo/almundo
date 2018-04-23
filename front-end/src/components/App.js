// dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// components
import Header from './Header'
import Content from './Content'

function App({children}) {
  return (
    <div>
      <Header />
      <Content body={children} />
      <ToastContainer />
    </div>
  )
}


App.propTypes = {
  children: PropTypes.object.isRequired
}


export default App