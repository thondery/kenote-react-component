
import React from 'react'
import renderer from 'react-test-renderer'
import Root from '../src/containers/root'

test('test => Root', () => {
  const component = renderer.create(
    <Root />
  )
  console.log(JSON.stringify(component.toJSON()))
  expect(component).toMatchSnapshot()
  expect(component.toJSON().type).toEqual('div')
  expect(component.toJSON().children[0].type).toEqual('p')
  expect(component.toJSON().children[0].children).toEqual(['name: ', 'test'])
  expect(component.toJSON().children[1]).toEqual('React test')
})