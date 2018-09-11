import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
// import TicTacToe from '../../../games/tic-tac-toe'

import css from './index.css'

class UserLanding extends Component {
  render() {
    return (
      <div>
        this is our landing page
      </div>
    )
  }
}

export default CSSModules(UserLanding, css)
