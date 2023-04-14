import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableNativeFeedback,Text,Image,SafeAreaView, View } from 'react-native';
import Webviews from './Webviews';

// const Stack = createNativeStackNavigator();

export default function App() {
  console.log("hello");
  return (
    <SafeAreaView style={styles.container}>

      

      {/* <Text>Welcom to our new project with react native</Text>
      <View style={styles.mainbox}>

      </View> */}
      {/* <Text>this my first react native app what about you</Text>
      <Text></Text>
      <TouchableNativeFeedback>
        <View style={{width:200,height:100,backgroundColor:"red"}}> 
          <Text>this is second view</Text>
        </View>
      </TouchableNativeFeedback>
      <Image source={require("./assets/favicon.png")}/>
      <StatusBar style="auto" /> */}
      
      <Webviews/>
      {/* <Image source="./assets/favicon.png"/> */}
        
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainbox:{
    backgroundColor:'black',
    height:50,
    width:50
  }
});
