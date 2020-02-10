import React, {Component} from 'react';
//Import React
import {SafeAreaView, StyleSheet, TextInput, Text, View} from 'react-native';
//Import basic component from React Native
import RNSpeedometer from 'react-native-speedometer';
//Import library for Speedometer

export default class App extends Component {
  state = {value: 0};
  //Initial value for Speedometer
  onChange = value => this.setState({value: parseInt(value)});
  //setting the value for Speedometer
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={stylesC.container}>
          <RNSpeedometer
            value={this.state.value}
            //value for Speedometer
            size={200}
            //Size of Speedometer
            minValue={0}
            //Min value for Speedometer
            maxValue={100}
            //Max value for Speedometer
            allowedDecimals={0}
            //Decimals value allowed or not
            labels={[
              {
                name: 'Low Risk',
                labelColor: '#F3FF33',
                activeBarColor: '#F3FF33',
              },
              {
                name: 'Medium Risk',
                labelColor: '#C1FF33',
                activeBarColor: '#C1FF33',
              },
              {
                name: 'High Risk',
                labelColor: '#2FBE1E',
                activeBarColor: '#2FBE1E',
              },
            ]}
            //Labels for the different steps of Speedometer
          />
        </SafeAreaView>

        <View style={{marginTop: 70, padding: 20}}>
          <Text style={{fontSize: 20}}>
            Enter the value for the speedometer graph between 0 to 100
          </Text>
          <TextInput
            placeholder="Enter Speedometer Value"
            style={styles.textInput}
            onChangeText={this.onChange}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    height: 25,
    fontSize: 16,
    marginTop: 30,
    borderBottomWidth: 0.3,
    borderBottomColor: 'black',
  },
});
const stylesC  = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
