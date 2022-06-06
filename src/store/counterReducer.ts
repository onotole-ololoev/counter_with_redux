let initialState: number = 0

export const counterReducer = (state: number = initialState, action: CounterActionType) => {
    switch (action.type) {
        case "ADD":
            return state + 1
        case "SUB":
            return state - 1
        case "RESET":
            return 0
        default:
            return state
    }
    
}

type CounterActionType = AddCountACType | SubCountACType | ResetCountACType

type AddCountACType = ReturnType<typeof addCountAC>
export const addCountAC = () => {
    return {
        type: "ADD"
    } as const
}

type SubCountACType = ReturnType<typeof subCountAC>
export const subCountAC = () => {
    return {
        type: "SUB"
    } as const
}

type ResetCountACType = ReturnType<typeof resetCountAC>
export const resetCountAC = () => {
    return {
        type: "RESET"
    } as const
}