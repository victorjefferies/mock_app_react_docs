import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

import TestScreen from './Screens/TestScreen';

class HomeScreen extends React.Component {
  render() {
    return (
      // <Div>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
            }))
          }}
        />
        {/* </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text> */}
        <Button
        title="Go to testscreen"
        onPress={() => {
          this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'TestScreen'})
            ],
          }))
        }}
        />
      </View>
      // </Div>
    );
  }  
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
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

// class TestScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>HomePage Screen</Text>
//         <Button
//         title="Go to home"
//         onPress={() => {
//           this.props.navigation.dispatch(StackActions.reset({
//             index: 0,
//             actions: [
//               NavigationActions.navigate({ routeName: 'Home'})
//             ],
//           }))
//         }}
//         />
//       </View>
//     );
//   }  
// }

export default createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
  TestScreen: {
    screen: TestScreen,
  },
}, {
    initialRouteName: 'Home',
});