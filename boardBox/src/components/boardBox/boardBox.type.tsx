export interface BoardBoxOptions {
    size: number,
    level: number,
}

export interface BoardBoxCell {
    number?: number,
    hasNumber?: boolean,
    disabled?: boolean,
    clicked?: () => void
    style: any,
    styleActive: any
}

export interface BoardBoxStyle {
    main: any,
    number: any,
    cell: any,
    col: any,
    row: any,
    numberHolder: any,
    cellActive: any
}
