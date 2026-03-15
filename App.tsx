import { ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Landing from './component/Landing'

const App = () => {
  return (
    
      <SafeAreaView>
        <ScrollView>
          <Landing />
        </ScrollView>
      </SafeAreaView>
   
  )
}

export default App