import {
    ChatActionTypes,
} from './actions'


export type CardData = {
    title: string
    body: string
}

export type StatState = {
    status: string
    cards: CardData[]
}

const initialState : StatState = {
    status: 'All',
    cards: [
        {
            title: 'Hello1',
            body: 'Body Body Body'
        },
        {
            title: 'Hello2',
            body: 'Body2 Body2 Body2'
        },
        {
            title: 'Hello3',
            body: 'Body2 Body2 Body2'
        },
    ]
}
  
export function statsReducer(
    state = initialState,
    action : ChatActionTypes
): StatState {
    switch (action.type) {
        case 'SEND_MESSAGE': {
            return {
                ...state,
                status: action.payload
            }
        }
        default:
            return state
    }
}