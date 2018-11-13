import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';



class TestScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HomePage Screen</Text>
        <Button
        title="Go to home"
        onPress={() => {
          this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Home'})
            ],
          }))
        }}
        />
      </View>
    );
  }  
}

export default TestScreen;