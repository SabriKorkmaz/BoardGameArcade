import {Dimensions, StyleSheet, ViewStyle} from "react-native";

const styles = (rowCount: number) => {

    const width = Dimensions.get('window').width;
    const height = width;
    const cellSize = ((width - 10) - 40) / rowCount


    return StyleSheet.create({
        main: {
            width: width,
            height: height,
            justifyContent: "center",
            alignItems: "center",
            overflow: "scroll"
        },
        row: {} as ViewStyle,
        col: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start"
        } as ViewStyle,
        cell: {
            width: cellSize,
            height: cellSize,
            backgroundColor: "rgba(255, 255, 255, .2)",
            justifyContent: "center",
            alignItems: "center",
            margin: 2,

        } as ViewStyle,
        number: {
            color: "white",
            fontFamily: 'Roboto',
            fontSize: (cellSize / 5) * 3,
        } as any,
        numberHolder: {
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
        },
        cellActive: {
            width: cellSize,
            height: cellSize,
            backgroundColor: "rgba(255, 255, 255, .2)",
            justifyContent: "center",
            alignItems: "center",
            margin: 2,
            borderStyle: "solid",
            borderRadius: 5,
            borderColor: "white",
            border: 2,
            borderWidth: 1
        }

    });
}

export default styles;

