import React from "react";
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from "../../App";
import {Box, HStack, VStack, Text, Pressable, Image, Center, Button} from 'native-base';

type Props = NativeStackScreenProps<RootStackParamList, 'Landing'>;

const Landing = ({navigation, route}: Props) => {
    const img = require('../../assets/logo-color.png');
    return (
        <VStack bg="primary.200" p={10} minWidth="100%" flex={1}>
            <Box rounded="md" flex={3} mb={2} p={4} justifyContent={"space-between"}>
                <Center>
                    <Image size={300} source={img} alt="logo"/>
                </Center>

            </Box>
            <VStack flex={4} mt={4} mb={3} justifyContent="flex-start" alignItems="center">
                <Button bg="primary.50" mb={5} minWidth={150} _pressed={{backgroundColor: "#fff"}}
                        onPress={() => console.log("hello world")}><Text fontSize="lg"
                                                                         color="primary.200">Resume</Text></Button>

                <Button bg="primary.50" mb={5} minWidth={150} size={"lg"} _pressed={{backgroundColor: "#fff"}}
                        onPress={() => console.log("hello world")}><Text fontSize="lg"
                                                                         color="primary.200">New Game</Text></Button>
                <Button bg="muted.900" mb={5} minWidth={150} _pressed={{backgroundColor: "#000"}}
                        onPress={() => console.log("hello world")}><Text fontSize="lg"
                                                                         color="muted.50">Multiplayer</Text></Button>
                <Button bg="primary.50" mb={4} minWidth={150} _pressed={{backgroundColor: "#fff"}}
                        onPress={() => console.log("hello world")}><Text fontSize="lg"
                                                                         color="primary.200">Leaderboards</Text></Button>
            </VStack>
            <HStack justifyContent="space-around" alignItems="center">
                <Button bg="primary.50" mr={3} minWidth={100} _pressed={{backgroundColor: "#fff"}}
                        onPress={() => console.log("hello world")}><Text
                    color="primary.200">Rate Us!</Text></Button>
                <Button bg="primary.50" mr={3} minWidth={100} _pressed={{backgroundColor: "#fff"}}
                        onPress={() => console.log("hello world")}><Text
                    color="primary.200">How to play</Text></Button>
                <Button bg="primary.50" minWidth={100} _pressed={{backgroundColor: "#fff"}}
                        onPress={() => console.log("hello world")}><Text
                    color="primary.200">Remove Ads!</Text></Button>
            </HStack>
        </VStack>);
};
export default Landing
