import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Landing() {
  return (
    <View style={styles.landingContainer}>
      <View style={styles.mainConatiner}>
        <Image
          source={{
            uri: 'https://randomuser.me/api/portraits/men/1.jpg',
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.welcome}>Hello,</Text>
          <View>
            <Text style={styles.name}>Rahul</Text>
          </View>
        </View>
        <View style={styles.totalTimeContainer}>
          <View>
            <Text style={styles.hour}>612 h</Text>
            <Text style={styles.totalTime}>Your total time</Text>
          </View>
          <View>
            <Text style={styles.work}>456</Text>
            <Text style={styles.todoWork}>Todo's work</Text>
          </View>
        </View>
      </View>
      <View style={styles.subContainer}>
        <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>
          <View style={[styles.workBox, styles.boxOne, styles.elevatedCard]}>
            <Text>Work</Text>
            <Text>4:15/6h</Text>
          </View>
          <View style={[styles.workBox, styles.boxTwo]}>
            <Text>Work</Text>
            <Text>4:15/6h</Text>
          </View>
          <View style={[styles.workBox, styles.boxThree]}>
            <Text>Work</Text>
            <Text>4:15/6h</Text>
          </View>
          <View style={[styles.workBox, styles.boxFour]}>
            <Text>Work</Text>
            <Text>4:15/6h</Text>
          </View>
        </ScrollView>
        <View style={styles.TodoBox}>
            <View >
                <Text style={styles.header}>Todo's Work</Text>
            </View>
            <View >
                <Text style={styles.todoItem}> Check Mail</Text>
                <Text style={styles.todoItem}> Put water to flower</Text>
                <Text style={styles.todoItem}> Send Card to Jeff House</Text>
            </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  landingContainer: { 
    backgroundColor: '#F2A07B', 
    flex:1,
    flexDirection: 'column',
},
  mainConatiner: {
    // flex: 0.35,
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  welcome: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#555',
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: 20,
  },
  totalTimeContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  hour: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
  },
  totalTime: {
    fontSize: 16,
    fontWeight: 400,
    color: '#555',
  },
  work: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
  },
  todoWork: {
    fontSize: 16,
    fontWeight: 400,
    color: '#555',
  },
  subContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    padding: 20,
  },
  scrollView:{
    paddingHorizontal: 15,
  },
  workBox: {
    width: 100,
    height: 150,  
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin:8
  },
    boxOne: { backgroundColor: '#cf9b17', },
    boxTwo: { backgroundColor: '#f2a07b' },
    boxThree: { backgroundColor: '#cf9b17' },
    boxFour: { backgroundColor: '#f2a07b' },
    elevatedCard:{
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    TodoBox:{
        marginTop: 20,
        flex:1
    },
    header:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    todoItem:{
        fontSize: 16,
        color: '#555',
        marginBottom: 5,
    }
});
