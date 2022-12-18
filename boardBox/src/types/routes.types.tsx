import {RootStackParamList} from "../../App";

export interface IBBRoutes {
    landing: IBBRouteItem
    board: IBBRouteItem,
    multiplayer: IBBRouteItem,
    leaderboards: IBBRouteItem,
    how2Play: IBBRouteItem,
    invite: IBBRouteItem
}

export interface IBBRouteItem {
    name: any,
    options?: Partial<IBBRouteItemOptions>
}

export interface IBBRouteItemOptions {
    title: string;
    headerTitle: string;
    headerTransparent: boolean;
    headerShown: boolean,
    headerBackImageSource: any,
    headerBackTitleVisible: boolean,
    headerBackImage: any,
    headerStyle: any
}
