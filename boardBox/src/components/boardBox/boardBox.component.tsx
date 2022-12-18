import {BoardBoxCell, BoardBoxOptions, BoardBoxStyle} from "./boardBox.type";
import React from "react";
import {StyleSheetProperties, Text, TouchableOpacity, View} from "react-native";
import styles from "./boardBox.style";

let board: BoardBoxCell[][] = [[]]
let currentNumber = 1;
let style: Partial<BoardBoxStyle> = {} as Partial<BoardBoxStyle>

const BoardBox = (options: BoardBoxOptions) => {
    style = styles(options.size);
    for (let x = 0; x < options.size; x++) {
        board[x] = Array(options.size).fill(null).map((e, i) => {
            return {hasNumber: false, disabled: true, number: undefined, style: style.cell}
        }) as BoardBoxCell[]
    }
    return (
        <View style={style.main}>
            {row(options.size)}
        </View>
    )
}
//x and y are coordinate
const click = (x: number, y: number) => {
    let cell = board[x][y];
    if (cell.hasNumber) {
        cell.number = undefined
        cell.hasNumber = false
        cell.style = style.cell
        return
    }
    cell.style = style.cellActive
    cell.number = currentNumber;
    cell.hasNumber = true
    board[x][y] = cell
    currentNumber++

}
const cellStyle = (x: number, y: number) => {
    console.log((board[x][y].style), "style")
    return board[x][y].style
}
const cell = (x: number, y: number) => {
    let current = board[x][y]
    return (<View style={cellStyle(x, y)}><TouchableOpacity style={style.numberHolder} onPress={() => {
            click(x, y)
        }}><Text style={style.number}>{current.number}</Text></TouchableOpacity></View>
    )
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

export default BoardBox;
