import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import board from "./src/routes/board";
import multiplayer from "./src/routes/multiplayer";
import how2Play from "./src/routes/how2Play";
import leaderboards from "./src/routes/leaderboards";
import landing from "./src/routes/landing";
import invite from "./src/routes/invite";
import {NativeBaseProvider} from "native-base";
import {colorModeManager, theme} from "./config";
import BBConstants from "./src/constants";


export type RootStackParamList = {
    landing: undefined;
    board: undefined;
    multiplayer: undefined;
    leaderboards: undefined;
    how2Play: undefined;
    invite: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
    return (
        <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="landing">
                    <Stack.Screen name={BBConstants.routes.landing.name} component={landing}
                                  options={{title: 'boardBox', headerShown: false}}/>
                    <Stack.Screen name={BBConstants.routes.board.name} component={board}/>
                    <Stack.Screen name={BBConstants.routes.multiplayer.name} component={multiplayer}/>
                    <Stack.Screen name={BBConstants.routes.leaderboards.name} component={leaderboards}/>
                    <Stack.Screen name={BBConstants.routes.how2Play.name} component={how2Play}/>
                    <Stack.Screen name={BBConstants.routes.invite.name} component={invite}
                                  options={{title: BBConstants.routes.invite.title}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
};

export default App;
