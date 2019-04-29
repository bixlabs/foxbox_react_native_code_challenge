/**
 * React Native App
 * Made by Daniel Padilla
 */


export const cocktailsType = {
    SET_COCKTAILS: 'SET_COCKTAILS'
}


export const cocktails = (state = {
    cocktailsList: []
}, action) => {
    switch (action.type) {
        case cocktailsType.SET_COCKTAILS:
            return Object.assign({}, state, {
                cocktailsList: action.cocktails
            });
        default:
            return state;
    }

}
