import {Dimensions} from "react-native";


export default tools = {
    getFixedScreenDimensions: () => {
        if (Dimensions.get('window').height > Dimensions.get('window').width) {
            return {
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height
            }
        } else {
            return {
                width: Dimensions.get('window').height,
                height: Dimensions.get('window').width
            }
        }
    },
}