import {ColorMode, extendTheme, StorageManager} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const colorModeManager: StorageManager = {
    get: async () => {
        try {
            let val = await AsyncStorage.getItem("@my-app-color-mode");
            return val === "dark" ? "dark" : "light";
        } catch (e) {
            console.log(e);
            return "light";
        }
    },
    set: async (value: ColorMode) => {
        try {
            await AsyncStorage.setItem("@my-app-color-mode", value!);
        } catch (e) {
            console.log(e);
        }
    },
};

const boardBoxTheme = extendTheme({
    colors: {
        // Add new color
        primary: {
            50: "#fff1f3",
            100: "#f68c9d",
            200: "#ed2647",
            300: "#b12139",
            400: "#6e2330"
        },
        // Redefining only one shade, rest of the color will remain same.
        amber: {
            400: '#d97706',
        },
    },
    config: {
        // Changing initialColorMode to 'dark'
        initialColorMode: 'dark',
    },
});
export const theme = extendTheme(boardBoxTheme);
