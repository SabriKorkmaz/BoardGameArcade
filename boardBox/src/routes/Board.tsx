import React from "react";
import {Button, Text, View} from "react-native";
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, 'Board'>;

const Board = ({navigation, route}: Props) => {

    return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Landing</Text>
        <Button
            title="Landing"
            onPress={() => {
                navigation.navigate("Landing")
            }}
        />
    </View>;
};
export default Board