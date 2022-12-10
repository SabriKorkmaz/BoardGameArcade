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
    title?: string
}
