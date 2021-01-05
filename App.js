
import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#454554'}
          centerComponent={{
            text: 'Monkey Chunky',
          }}
        />
        <TextInput style={styles.inputBox} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    backgroundColor: 'red',
    borderWidth: 4,
  },
});
