import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router-dom'

import css from './index.css'

class AdminLanding extends Component {
  render() {
    return (
      <div>
        This is for the admins
        <Link to="/game/queue/tictactoe"><h3>Tic Tac Toe</h3></Link>
      </div>
    )
  }
}

export default CSSModules(AdminLanding, css)
