import React, { Component } from 'react'

import { Foo, Bar } from 'ui-kit-react-7'

export default class App extends Component {
  render () {
    return (
      <div>
        <Foo text='Foo Props' />
        <Bar text='Bar Props' />
      </div>
    )
  }
}
