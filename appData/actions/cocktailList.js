import cocktails from "../api/cocktails";
import {showDialog} from "./reducers/dialog";
import library from "../api/requestLibrary";
import {setCocktails} from "./reducers/cocktails";

export function getFilteredCocktails() {
    return function (dispatch, getState) {
        return cocktails.getCocktail()
            .then((responseData) => {
                if (library.checkErrorMessage(responseData)) {
                    throw responseData.error;
                }
                if (library.checkResponseData(responseData)) {
                    console.log(responseData)
                    dispatch(setCocktails(responseData.drinks))
                }
            })
            .catch((error) => {
                dispatch(showDialog('Error', error.message))
                return error
            })
    }
}