import React from 'react';
import { useState } from 'react'
import { useColorScheme } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ParticipantContext } from './context and async storage/ParticipantContext';
import { getAsyncData } from './context and async storage/asyncData';

import HomeScreen from './screens/special screens/Home';
import BeckScreen  from "./screens/surveys screens/BAI"
import CUDITScreen from './screens/surveys screens/CUDIT';
import AdminScreen from './screens/special screens/Admin';
import FagerstrormScreen from './screens/surveys screens/Fagerstorm';
import HasslesScreen from './screens/surveys screens/HasslesAndUplifts';
import MCQScreen from './screens/surveys screens/MCQ';
import SAFEScreen from './screens/surveys screens/SAFE';
import AESScreen from './screens/surveys screens/AES';
import MJDrugHistoryQuestionnaireScreen from './screens/surveys screens/MJDrugHistoryQuestionnaire';
import SANSScreen from './screens/surveys screens/SANS';
import SIASScreen from './screens/surveys screens/SIAS';
import SASSCreen from './screens/surveys screens/SAS';
import RosenbergScreen from './screens/surveys screens/RosenbergSelfEsteem';
import RLEScreen from './screens/surveys screens/RLE';
import PANSSScreen from './screens/surveys screens/PANSS';
import SDSScreen from './screens/surveys screens/SDS';
import DASTScrenn from './screens/surveys screens/DAST';
import SoRLEScreen from './screens/surveys screens/SurveyOfRecentLifeExperiences';
import MoodEpisodesScreen from './screens/MoodEpisodes';
import AuditScreen from './screens/surveys screens/AUDIT';
import CGIScreen from './screens/surveys screens/CGI';
import SHAPSScreen from './screens/surveys screens/SHAPS';
import TecScreen from './screens/TEC';
import MaccatScreen from './screens/surveys screens/MacCAT';
import GAFScreen from './screens/surveys screens/GAF';
import CannabisWithdrawalScreen from './screens/surveys screens/CannabisWithdrawalScale';
import BarrattScreen from './screens/surveys screens/BSMSS';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [val, setVal] = useState(getAsyncData());

  return (
    <NavigationContainer>
      <ParticipantContext.Provider value={{val, setVal}}>
      <Stack.Navigator>
         
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="Beck Anxiety" component={BeckScreen} />
      <Stack.Screen name="CUDIT-R" component={CUDITScreen} />
      <Stack.Screen name="FTND" component={FagerstrormScreen}/>
      <Stack.Screen name="Hassles and Uplifts" component={HasslesScreen} />
      <Stack.Screen name="SAFE" component={SAFEScreen} />
      <Stack.Screen name="MCQ" component={MCQScreen}/>
      <Stack.Screen name="AES" component={AESScreen}/>
      <Stack.Screen name="MJ Drug History Questionnaire" component={MJDrugHistoryQuestionnaireScreen} />
      <Stack.Screen name="SANS" component={SANSScreen} />
      <Stack.Screen name="SIAS" component={SIASScreen} />
      <Stack.Screen name="SAS" component={SASSCreen} />
      <Stack.Screen name="Rosenberg" component={RosenbergScreen} />
      <Stack.Screen name="RLE" component={RLEScreen} />
      <Stack.Screen name="PANSS" component={PANSSScreen} />
      <Stack.Screen name="SDS" component={SDSScreen} />
      <Stack.Screen name="DAST" component={DASTScrenn} />
      <Stack.Screen name="SoRLE" component={SoRLEScreen} />
      <Stack.Screen name="Mood Episodes" component={MoodEpisodesScreen} />
      <Stack.Screen name="Audit" component={AuditScreen} />
      <Stack.Screen name="Cgi" component={CGIScreen} />
      <Stack.Screen name="Shaps" component={SHAPSScreen} />
      <Stack.Screen name='Tec' component={TecScreen} />
      <Stack.Screen name="Maccat" component={MaccatScreen} />
      <Stack.Screen name="GAF" component={GAFScreen} />
      <Stack.Screen name='Cannabis' component={CannabisWithdrawalScreen} />
      <Stack.Screen name='Barratt'component={BarrattScreen} />

      <Stack.Screen name="Admin" component={AdminScreen} />

      </Stack.Navigator>
      </ParticipantContext.Provider>
    </NavigationContainer>
  );
}

export default App;
