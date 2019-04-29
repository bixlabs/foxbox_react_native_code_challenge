import React from "react";
import {View, FlatList, SafeAreaView} from "react-native"
import {appStyle} from "../appStyle";
import localStyle from "./localStyle";
import cocktails from "../../api/cocktails";
import {connect} from "react-redux";
import {getFilteredCocktails} from "../../actions/cocktailList";
import CocktailCard from "../components/cocktailCard";
import {HeaderBar} from "../components/headerBar";

class Home extends React.Component<{}> {

    constructor(props) {
        super(props)
        this.props.dispatch(getFilteredCocktails());
        this.searchIcon = require('../../resources/icons/Search.png');
    }

    render() {
        console.log('cocktails rendered')
        console.log(this.props.cocktailsList)
        return (
            <SafeAreaView
                style={[appStyle.container, localStyle.container]}
            >
                <HeaderBar
                    title="Random drinks 0.1"
                    bigIcon
                    rightIcon={this.searchIcon}
                />
                <FlatList
                    data={this.props.cocktailsList}
                    renderItem={(({item, index}) => {
                        return <CocktailCard
                            cocktail={item}
                        />
                    })}
                />
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => ({
    dialog: state.dialog,
    cocktailsList: state.cocktails.cocktailsList
});

export default connect(mapStateToProps)(Home)