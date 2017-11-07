
import React, { PureComponent } from 'react'
import KenoteLayout from '../../../src'

export default class Root extends PureComponent {

  render () {
    return (
      <KenoteLayout name={'test'} >
        React test
      </KenoteLayout>
    )
  }
}