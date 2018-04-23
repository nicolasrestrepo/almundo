import { combineReducers } from 'redux'
import * as types from './actionTypes'

const initialState = {
    nameFilter: '',
    starsFilter: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    },
    filterBy: 'name'
}

function nameFilterReducer(state = initialState.nameFilter, action = {}){
    switch(action.type){
        case types.ADD_FILTER_HOTEL_NAME: 
            return action.payload
        default: 
            return state    
    }
}

function starsFilterReducer(state = initialState.starsFilter, action = {}){
    switch(action.type){
        case types.ADD_STARS_FILTER:
            return {...state, 
                [action.payload.number]: action.payload.status}
        case types.REMOVE_STARS_FILTER:
            return initialState.starsFilter            
        default: 
            return state    
    }
}

function filterByReducer(state = initialState.filterBy, action = {}){
    switch(action.type){
        case types.ADD_FILTER_HOTEL_NAME:
            return 'name'
        case types.ADD_STARS_FILTER:
            return 'stars'    
        case types.REMOVE_STARS_FILTER:
            return 'name'
        default:
            return state        
    }
}

const reducer = combineReducers({
    nameFilter: nameFilterReducer,
    starsFilter: starsFilterReducer,
    filterBy: filterByReducer
})

export default reducer