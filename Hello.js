import { View, Text } from 'react-native'
import React from 'react'

const Hello = (props) => {

    let name = props.name

  return (
    <>
    <Text>Hello, {name}</Text>
    <Text>How are you?</Text>
  </>
  )
}

export default Hello