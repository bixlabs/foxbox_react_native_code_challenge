export default {
    checkResponseData: function (response) {
        if (response != undefined) {
            return true
        }
        return undefined
    },
    checkErrorMessage: function (response) {
        if (response.error != null || response.errorCode != null) {
            return response.error || response.description
        }
        return undefined
    }
}