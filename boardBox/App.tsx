import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from "./src/routes/Landing";
import Board from "./src/routes/Board";
import Multiplayer from "./src/routes/Multiplayer";
import How2Play from "./src/routes/How2Play";
import Leaderboards from "./src/routes/Leaderboards";
import Invite from "./src/routes/Invite";
import {NativeBaseProvider} from "native-base";
import {colorModeManager, theme} from "./config";

export type RootStackParamList = {
    Landing: undefined;
    Board: undefined;
    Multiplayer: undefined;
    Leaderboards: undefined;
    How2Play: undefined;
    Invite: undefined;

};

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
    return (
        <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Landing">
                    <Stack.Screen name="Landing" component={Landing} options={{title: 'boardBox', headerShown: false}}/>
                    <Stack.Screen name="Board" component={Board}/>
                    <Stack.Screen name="Multiplayer" component={Multiplayer}/>
                    <Stack.Screen name="Leaderboards" component={Leaderboards}/>
                    <Stack.Screen name="How2Play" component={How2Play}/>
                    <Stack.Screen name="Invite" component={Invite} options={{title: 'Invite Friends'}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
};

export default App;
