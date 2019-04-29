import React from "react";
import {View, Image, Text} from 'react-native'
import localStyle from "./localStyle";
import {appStyle} from "../../appStyle";

export default class CocktailCard extends React.Component<{}> {
    render() {
        console.log(this.props.cocktail)
        return (
            <View
                style={localStyle.cardContainer}
            >
                <View
                    style={localStyle.textContainer}>
                    <Text
                        style={[appStyle.bigSection, localStyle.cardTitle]}
                    >
                        {this.props.cocktail.strDrink}
                    </Text>
                    <Text
                        style={[appStyle.textSection, localStyle.cardTitle]}
                    >
                        {"\u2022 ingredient 1 \n\u2022 ingredient 2 \n\u2022 ingredient 3 \n"}
                    </Text>
                </View>
                <Image
                    style={localStyle.cocktailImage}
                    source={{uri: this.props.cocktail.strDrinkThumb}}
                    resizeMode='contain'
                />
            </View>
        )
    }
}