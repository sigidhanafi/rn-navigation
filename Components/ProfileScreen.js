import React from 'react'
import { View, Text } from 'react-native'

class ProfileScreen extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
        <Text>Profile Screen</Text>
        <Text>Sigit Hanafi</Text>
        <Text>JavaScript Learner</Text>
      </View>
    )
  }
}

export default ProfileScreen