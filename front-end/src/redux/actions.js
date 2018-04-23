import * as types from './actionTypes'
// actions filter by name

export function filterByName(name){
    return{
        type: types.ADD_FILTER_HOTEL_NAME,
        payload: name
    }
}

export function addStarsByFilter(number, status){
    return{
        type: types.ADD_STARS_FILTER,
        payload: {
            number,
            status
        }
    }
}

export function removeStarsFilter(stars){
    return{
        type: types.REMOVE_STARS_FILTER,
    }
}
