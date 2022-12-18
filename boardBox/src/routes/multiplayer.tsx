import React from "react";
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from "../../App";
import {Box, Button, HStack, VStack, Text, Icon, SearchIcon, ShareIcon} from "native-base";
import BBConstants from "../constants";

type Props = NativeStackScreenProps<RootStackParamList, 'multiplayer'>;

const Multiplayer = ({navigation, route}: Props) => {
    const navigate = (param: any) => {
        navigation.navigate(param)
    }
    return (
        <VStack bg="primary.200" minWidth="100%" justifyContent={"center"} alignItems={"center"} flex={1} safeArea>
            <Button alignItems="center" justifyContent={"space-between"}
                    leftIcon={<SearchIcon size="lg" color="muted.900"/>} mb={3} maxWidth={170}
                    onPress={() => navigate(BBConstants.routes.invite.name)}><Text fontSize="lg"
                                                                                   color="primary.200">Find
                Opponent</Text></Button>
            <Button
                justifyContent={"space-between"}
                leftIcon={<ShareIcon ShareIcon size="lg" color="muted.900"/>}
                mb={3} minWidth={170}
                onPress={() => navigate(BBConstants.routes.invite.name)}><Text fontSize="lg"
                                                                               color="primary.200">Invite
                Friend</Text></Button>
        </VStack>
    )
};
export default Multiplayer
