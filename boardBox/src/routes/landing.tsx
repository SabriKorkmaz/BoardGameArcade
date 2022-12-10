import React from "react";
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from "../../App";
import {Box, HStack, VStack, Text, Image, Center, Button} from 'native-base';
import BBConstants from "../constants";
import {IBBRoutes} from "../types/routes.types";

type LandingProps = NativeStackScreenProps<RootStackParamList, 'landing'>;
const img = require('../../assets/logo-color.png');

const Landing = ({navigation, route}: LandingProps) => {
    const navigate = (param: any) => {
        navigation.navigate(param)
    }
    return (
        <VStack bg="primary.200" p={10} minWidth="100%" flex={1}>
            <Box rounded="md" flex={3} mb={2} p={4} justifyContent={"center"}>
                <Center>
                    <Image size={300} source={img} alt="logo"/>
                </Center>
            </Box>
            <VStack flex={4} mt={4} mb={3} justifyContent="flex-start" alignItems="center">
                <Button mb={3} minWidth={150}
                        onPress={() => navigate(BBConstants.routes.multiplayer.name)}><Text fontSize="lg"
                                                                                            color="primary.200">Resume</Text></Button>
                <Button mb={3} minWidth={150}
                        onPress={() => navigate(BBConstants.routes.multiplayer.name)}><Text fontSize="lg"
                                                                                            color="primary.200">New
                    Game</Text></Button>
                <Button bg="muted.900" mb={3} minWidth={150} _pressed={{backgroundColor: '#171717'}}
                        onPress={() => navigate(BBConstants.routes.multiplayer.name)}><Text
                    color="muted.50" colorScheme="muted" fontSize="lg">Multiplayer</Text></Button>
                <Button mb={3} minWidth={150}
                        onPress={() => navigate(BBConstants.routes.multiplayer.name)}><Text
                    color="primary.200" fontSize="lg">Leaderboards</Text></Button>
            </VStack>
            <HStack justifyContent="center" alignItems="center">
                <Button mr={3} minWidth={100}
                        onPress={() => navigate(BBConstants.routes.multiplayer.name)}><Text
                    color="primary.200">Rate Us!</Text></Button>
                <Button mr={3} minWidth={100}
                        onPress={() => navigate(BBConstants.routes.multiplayer.name)}><Text
                    color="primary.200">How2Play</Text></Button>
                <Button minWidth={100}
                        onPress={() => navigate(BBConstants.routes.multiplayer.name)}><Text
                    color="primary.200">Remove Ads!</Text></Button>
            </HStack>
        </VStack>);
};
export default Landing
