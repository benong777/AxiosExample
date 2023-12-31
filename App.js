/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,          // Loading spinner
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
//-- Custom hook
import useListUsers from './src/hooks/useListUsers';

// function App(): JSX.Element {
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  //-- Bring in custom hook
  const [{ data, loading, error }, listUsers] = useListUsers();

  useEffect(() => {     // Run function only once.. unless any item in dependency array changes
    listUsers();
  }, []);               // Dependency array

  console.log({data: data, loading, error});

  //-- Loading: Show spinner when loading
  if (loading) return <ActivityIndicator size="large" />

  //-- Error: Show message when error occurred
  if (error) return (
      <Text>{error}</Text>
  );


  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

          <Text>AXIOS</Text>
          <Text>Loading: {loading}</Text>
          <Text>Error: {error}</Text>
          {/* <Text>Data: {data}</Text> */}
          {/* <Text>Loading: {results.loading}</Text>
          <Text>Error: {results.error}</Text>
          <Text>Data: {results.data}</Text> */}
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
