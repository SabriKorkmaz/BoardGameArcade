import React from "react";
import {Button, Text, View} from "react-native";
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from "../../App";
import {SearchIcon, Box, VStack} from "native-base";
import BBConstants from "../constants";
import BoardBox from "../components/boardBox/boardBox.component";

type Props = NativeStackScreenProps<RootStackParamList, 'board'>;

const Board = ({navigation, route}: Props) => {

    return <VStack bg="primary.200" minWidth="100%" justifyContent={"flex-start"} alignItems={"center"} flex={1}
                   safeArea>
        <Box minHeight={"10%"} width={"100%"} bgColor={"primary.500"}>
        </Box>
        <BoardBox size={10} level={9}/>
        <Box minHeight={"20%"} width={"100%"} bgColor={"primary.500"}>

        </Box>
    </VStack>
};
export default Board
