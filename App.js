import React from 'react';
import store from "./appData/config/store";
import {Provider} from 'react-redux';
import NavigationView from "./appData/views/navigationContainer";

type Props = {};
export default class App extends React.Component<{}> {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }

    render() {
        return (
            <Provider
                store={store}
            >
                <NavigationView/>
            </Provider>
        );
    }
}

