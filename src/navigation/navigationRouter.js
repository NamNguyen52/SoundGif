// All app routes are defined here

import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'

// Scenes AKA app views
import SceneOne from '../components/sceneOne'
import GifSearch from '../containers/gifSearchContainer'

// App router
class NavigationRouter extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <Router>
        <Scene key="root">
          <Scene key='sceneOne' component={SceneOne} title='Scene One'></Scene>
          <Scene initial={true} key='GifSearch' component={GifSearch} title='Giphy Search'></Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
