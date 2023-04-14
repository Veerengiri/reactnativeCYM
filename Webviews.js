import React from 'react'
import { View,Text } from 'react-native'
import {WebView} from 'react-native-webview';

function Webviews() {
  return (
    <WebView
        automaticallyAdjustContentInsets={false}
        source={{uri:'https://vcym.netlify.com'}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        style={{marginTop: 30,width: 360}}
    />
  )
}

export default Webviews