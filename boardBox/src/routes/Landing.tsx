import React from "react";
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from "../../App";
import {Box, HStack, VStack, Text, Pressable, Image, Center, Button} from 'native-base';

type Props = NativeStackScreenProps<RootStackParamList, 'Landing'>;

const Landing = ({navigation, route}: Props) => {
    const img = require('../../assets/logo-color.png');
    return (
        <VStack bg="primary.200" p={10} minWidth="100%" flex={1}>
            <Box rounded="md " flex={1} mb={2} justifyContent={"space-around"}>
                <Center>
                    <Image size={300} source={img} alt="logo"/>
                </Center>;
                <HStack justifyContent="space-around">
                    <Image width="100%"/>
                </HStack>
                <HStack justifyContent="space-around">
                    <Button bg="primary.50" _pressed={{backgroundColor: "#fff"}}
                            onPress={() => console.log("hello world")}><Text
                        color="primary.200">Level</Text></Button>
                    <Button bg="primary.50" _pressed={{backgroundColor: "#fff"}}
                            onPress={() => console.log("hello world")}><Text
                        color="primary.200">Total Score</Text></Button>
                </HStack>
            </Box>
            <VStack flex={1} mt={3} mb={3} rounded="md" justifyContent="space-between" alignItems="center">
                <Button bg="primary.50" _pressed={{backgroundColor: "#fff"}} onPress={() => console.log("hello world")}><Text
                    color="primary.200">Score</Text></Button>
                <Button bg="primary.50" _pressed={{backgroundColor: "#fff"}} onPress={() => console.log("hello world")}><Text
                    color="primary.200">Resume</Text></Button>
                <Button bg="primary.50" _pressed={{backgroundColor: "#fff"}} onPress={() => console.log("hello world")}><Text
                    color="primary.200">New Game</Text></Button>
                <Button bg="primary.50" _pressed={{backgroundColor: "#fff"}} onPress={() => console.log("hello world")}><Text
                    color="primary.500">Multiplayer</Text></Button>
                <Button bg="primary.50" _pressed={{backgroundColor: "#fff"}} onPress={() => console.log("hello world")}><Text
                    color="primary.200">Leaderboards</Text></Button>
            </VStack>
            <HStack justifyContent="space-around" alignItems="center">
                <Button bg="primary.50" _pressed={{backgroundColor: "#fff"}} onPress={() => console.log("hello world")}><Text
                    color="primary.200">Rate Us!</Text></Button>
                <Button bg="primary.50" _pressed={{backgroundColor: "#fff"}} onPress={() => console.log("hello world")}><Text
                    color="primary.200">How to play</Text></Button>
                <Button bg="primary.50" _pressed={{backgroundColor: "#fff"}} onPress={() => console.log("hello world")}><Text
                    color="primary.200">Remove Ads!</Text></Button>
            </HStack>
        </VStack>);
};
export default Landing
