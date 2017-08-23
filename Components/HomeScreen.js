import React from 'react'
import { View, Text, Button } from 'react-native'

class HomeScreen extends React.Component {
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
        <Text>Home Screen</Text>
        <Button
          title="view profile"
          onPress={() => navigate('Profile')}
          />
      </View>
    )
  }
}

export default HomeScreen