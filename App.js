/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Header from './src/components/header'
import AlbumList from './src/components/album-list'
import { View } from 'react-native'


export default class App extends Component<{}> {
  render() {
    return (
      <View>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    )
  }
}
