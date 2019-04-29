import {cocktailsType} from "../../reducers/cocktailsReducer";


export const setCocktails = (cocktails) => {
    return {
        type: cocktailsType.SET_COCKTAILS,
        cocktails: cocktails || []
    }
}