import {BoardBoxCell, BoardBoxOptions, BoardBoxStyle} from "./boardBox.type";
import React, {useEffect, useRef, useState} from "react";
import {Animated, StyleSheet, StyleSheetProperties, Text, TouchableOpacity, View} from "react-native";
import styles from "./boardBox.style";

let board: BoardBoxCell[][] = [[]]
let currentNumber = 1;
let style: Partial<BoardBoxStyle> = {} as Partial<BoardBoxStyle>

const BoardBox = (options: BoardBoxOptions) => {
    const [boardState, setBoardState] = useState(Array.from({length: options.size}, () => Array.from({length: options.size}, () => null) as any))
    style = styles(options.size);

    useEffect(() => {
        let copy = [...boardState];
        for (let i = 0; i < options.size; i++) {
            for (let j = 0; j < options.size; j++) {
                copy[i][j] = {
                    hasNumber: false,
                    disabled: false,
                    style: style["cell"],
                    styleActive: style["cellActive"],
                    number: undefined,
                }
            }
        }
        setBoardState(copy);
    }, [])
    useEffect(() => {
    }, [boardState])
    const cellStyle = (x: number, y: number) => {
        let copy = [...boardState];
        return copy[x][y]?.hasNumber ? copy[x][y]?.styleActive : copy[x][y]?.style
    }
    const cell = (x: number, y: number) => {
        if (x != undefined && y != undefined) {
            if (boardState[x]) {
                return (
                    <View style={cellStyle(x, y)}>
                        <TouchableOpacity style={style?.numberHolder}
                                          onPress={() =>
                                              click(x, y)
                                          }><Text
                            style={style.number}>{boardState[x][y]?.number}</Text></TouchableOpacity></View>)
            }
        }

    }

    const click = (x: number, y: number) => {
        console.log("clicked")
        let copy = [...boardState];
        if (copy[x][y].hasNumber) {
            return
        } else {
            copy[x][y].style = style.cellActive
            copy[x][y].number = currentNumber;
            copy[x][y].hasNumber = true
        }
        setBoardState(copy)
        currentNumber++

    }
    const row = (size: number) => {
        const rows = [];
        for (let i = 0; i < size; i++) {
            rows.push(col(size, i))
        }
        return (<View style={style.row}>
            {rows}
        </View>)
    }
    const col = (size: number, y: number) => {
        const cols = [];
        for (let i = 0; i < size; i++) {
            cols.push(cell(i, y))
        }
        return (<View style={style.col}>
            {cols}
        </View>)
    }
    return (
        <View style={style.main}>
            {row(options.size)}
        </View>
    )
}
//x and y are coordinate

export default BoardBox;
