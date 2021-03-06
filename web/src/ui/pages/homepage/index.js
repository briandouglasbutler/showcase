import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import autoLogin from '../../../process/users/auth/auto-login'
import connected from '../../../state/connect'
import { selector as homepage } from './reducer'
import * as homepageActions from './actions'
import css from './index.css'

class Homepage extends Component {
  componentDidMount() {
    this.props.homepageActions.fetchDailyMessage()
  }

  render() {
    const { messageOfTheDay } = this.props.homepage

    return (
      <div styleName="homepage-container">
        <div styleName="daily-message">
          {messageOfTheDay}
        </div>

      </div>
    )
  }
}

export default connected([homepage], [homepageActions])(autoLogin(CSSModules(Homepage, css)))
