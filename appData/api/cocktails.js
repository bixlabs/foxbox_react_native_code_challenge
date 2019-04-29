import Environment from "../config/environment";

export default {
    getCocktail: function () {
        return fetch(Environment.PRODUCTION_URL + Environment.FILTER_COCKTAILS, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((response) => {
                return response
            })
            .catch((error) => {
                console.log('get cocktails error');
                console.log(Environment.PRODUCTION_URL + Environment.FILTER_COCKTAILS);
                console.error(error);
                return {
                    error: {
                        message: "Can't reach server"
                    }
                }
            });

    }
}