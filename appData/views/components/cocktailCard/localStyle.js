import {StyleSheet} from "react-native";
import {colors} from "../../appStyle";

export default localStyle = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        height: 170,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 20,
        padding: 20,
        borderRadius: 10
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    cardTitle: {
        color: colors.textColor,
        marginBottom: 10,
        marginRight: 10
    },
    cardText: {
        color: colors.textColor,
        marginRight: 10
    },
    cocktailImage: {
        width: 130,
        height: 130
    }
})