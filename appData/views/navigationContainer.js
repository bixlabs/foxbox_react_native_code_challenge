import React from 'react';
import {connect} from 'react-redux';
import {
    Linking,
    Platform,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';
import {hideDialog} from "../actions/reducers/dialog";
import Home from "./home";
import {Dialog} from "./components/dialog";
import {appStyle, colors, dimensions} from "./appStyle";
import tools from "../api/tools";


class NavigationView extends React.Component<{}> {

    constructor(props) {
        super(props);
    };

    hideDialog = () => {
        this.props.dispatch(hideDialog())
    };

    getDialogUI = () => {
        if (this.props.dialog.dialogVisible) {
            return <Dialog hide={this.hideDialog}>
                <View
                    style={[
                        dialogContainer,
                        {
                            width: this.screen.width - 2 * dimensions.normalGap,
                        }
                    ]}
                >
                    <Text
                        style={[
                            appStyle.smallSection,
                            dialogTitle
                        ]}
                    >
                        {this.props.dialog.dialogTitle}
                    </Text>
                    <Text
                        style={[
                            appStyle.textSection,
                            dialogText
                        ]}
                    >{this.props.dialog.dialogText}
                    </Text>
                </View>
            </Dialog>
        } else {
            return <View/>
        }
    }


    render() {
        this.screen = tools.getFixedScreenDimensions();
        this.dialog = this.getDialogUI();
        return (
            <View
                style={{flex: 1}}
            >
                <Home
                />
                {this.dialog}
            </View>
        );
    }
}

let dialogContainer = {
    borderRadius: 10,
    marginTop: dimensions.normalGap,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
};

let dialogTitle = {
    marginTop: 10,
    fontWeight: '400',
    width: '100%',
    paddingHorizontal: dimensions.normalGap / 2,
    textAlign: 'left',
    color: colors.blackText,
    marginBottom: dimensions.normalGap / 3,
};

let dialogText = {
    marginBottom: 0.5 * dimensions.normalGap,
    width: '100%',
    height: dimensions.normalGap,
    textAlign: 'left',
    lineHeight: 18,
    paddingLeft: 0.4 * dimensions.normalGap,
    paddingRight: 0.4 * dimensions.normalGap,
}


const mapStateToProps = (state) => ({
    dialog: state.dialog,
    nav: state.nav
});

export default connect(mapStateToProps)(NavigationView);
