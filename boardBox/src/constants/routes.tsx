import {IBBRoutes} from "../types/routes.types";
import {NativeStackNavigationConfig} from "react-native-screens/lib/typescript/native-stack/types";

const routes: IBBRoutes = {
    board: {name: "board", options: {headerShown: false}},
    how2Play: {name: "how2Play"},
    invite: {name: "invite", options: {title: "Invite Friends"}},
    landing: {name: "landing", options: {title: 'boardBox',}},
    leaderboards: {name: "leaderboards", options: {title: 'Leaderboards'}},
    multiplayer: {
        name: "multiplayer"
    }
}

export const defaultNavigation: NativeStackNavigationConfig = {
    headerTitle: "",
    headerBackTitleVisible: false,
    headerTransparent: true,
    headerTintColor: '#ffffff',

}
export default routes;
