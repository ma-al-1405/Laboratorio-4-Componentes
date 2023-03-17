import React, {useState} from 'react';
import BudgetScreen from './src/screens/BudgetScreen';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, 
  TextInput, 
  Button,
  TouchableOpacity
} from 'react-native';
 
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App (){
  return(
    < BudgetScreen/>
    
  )
}
export default App