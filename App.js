import * as React from 'react';
import { Text, View, StyleSheet,ImageBackground, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const image = { uri: "data:image/jpeg;base64,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" };

export default function App() {
  const [price, setPrice] = React.useState(0);
  const [discount, setDiscount] = React.useState(0);
  const [totalPrice, setTotalPrice] =React.useState(0);

  React.useEffect(() => {
    setTotalPrice(parseFloat(price)*(1 - parseInt(discount)/100));
  },[price,discount]);
  return ( 
    <View style={styles.container}>
    <ImageBackground source={image}  style={styles.image}/>
      <Text style={styles.headr}> Discount Calculator </Text>

      <Text style={styles.subheadone}> Original Price</Text>{' '}
      <TextInput onChangeText = {(price) => setPrice(price)} style = {styles.textinputone}></TextInput>

      <Text style={styles.subheadtwo}> Discount Percentage </Text>{' '}
       <TextInput onChangeText = {(discount) => setDiscount(discount)} style = {styles.textinputtwo}></TextInput>

      <Text style={styles.subheadthree}> You Save </Text>{' '}
      <View style = {styles.textinputthree}> {price - totalPrice}</View>

      <Text style={styles.subheadfour}> Final Price </Text>
      <View style = {styles.textinputfour}>{totalPrice}</View>

      <Button
        title="Save"
        onPress={() => Alert.alert('Saved')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headr: {
    fontSize: 25,
    fontFamily: 'lucida grande',
    fontWeight: 'bold',
    position: 'absolute',
    left: 10,
    right: 10,
    top: '8%',
    textAlign: 'center',
  },
  subheadone: {
    fontSize: 18,
    position: 'absolute',
    left: 10,
    right: 10,
    top: '24%',
    fontFamily: 'lucida grande',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  textinputone: {
    height: 30, 
    width: 317,
    backgroundColor: '#ffffff',
    borderColor: 'gray',
    borderWidth: 1,
    position: 'absolute',
    top: '32%',
  },
  subheadtwo: {
    fontSize: 18,
    position: 'absolute',
    left: 10,
    right: 10,
    top: '40%',
    fontFamily: 'lucida grande',
    textAlign: 'center',
  },
   textinputtwo: {
    height: 30, 
    width: 317,
    backgroundColor: '#ffffff',
    borderColor: 'gray',
    borderWidth: 1,
    position: 'absolute',
    top: '48%',
  },
  subheadthree: {
    fontSize: 18,
    position: 'absolute',
    left: 10,
    right: 10,
    top: '56%',
    fontFamily: 'lucida grande',
    textAlign: 'center',
  },
  textinputthree: {
    height: 30, 
    width: 317,
    backgroundColor: '#ffffff',
    borderColor: 'gray',
    borderWidth: 1,
    position: 'absolute',
    top: '64%',
  },
  subheadfour: {
    fontSize: 18,
    position: 'absolute',
    left: 10,
    right: 10,
    top: '72%',
    fontFamily: 'lucida grande',
    textAlign: 'center',
  },
  textinputfour: {
    height: 30, 
    width: 317,
    backgroundColor: '#ffffff',
    borderColor: 'gray',
    borderWidth: 1,
    position: 'absolute',
    top: '80%',
  },




});
