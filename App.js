/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';

import {

  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,

} from 'react-native/Libraries/NewAppScreen';
import {queryAllJourneys} from "./src/database/RealmSetup";
import TrainJourneyList from "./src/database/TrainJourneyList";
import MainHeader from "./src/components/UI/MainHeader";
import {Container, Content}  from 'native-base';
import NewJourneyModal from "./src/components/Journeys/NewJourneyForm";

const App: () => React$Node = () => {

  state = {
    dataSource: queryAllJourneys
  };

  return (
    <Container>
      <MainHeader/>
      <TrainJourneyList/>

      {/*<SafeAreaView>*/}


      {/*  /!*<ScrollView*!/*/}
      {/*  /!*  contentInsetAdjustmentBehavior="automatic"*!/*/}
      {/*  /!*  style={styles.scrollView}>*!/*/}
      {/*  /!*  *!/*/}


      {/*  /!*</ScrollView>*!/*/}
      {/*</SafeAreaView>*/}
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
