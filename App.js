import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IndexScreen from './src/Screens/IndexScreen'
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {BlogProvider} from './src/Context/BlogContext'


const navigator = createStackNavigator({
  Index:IndexScreen
},{
  initialRouteName:'Index',
  defaultNavigationOptions:{
    title:'Blogs'
  }
});



const App = createAppContainer(navigator);

export default ()=>{
return (
  <BlogProvider>
     <App/>
  </BlogProvider>
)

}
