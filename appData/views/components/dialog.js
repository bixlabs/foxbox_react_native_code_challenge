/**
 * React Native App
 * Made by Daniel Padilla
 */

import React, {Component} from 'react';
import {
    Text, View, StyleSheet, Image, Button, TouchableHighlight, Dimensions,
    KeyboardAvoidingView,
} from 'react-native';

export class Dialog extends React.Component {
    constructor(props) {
        super(props);
    }


    checkDistribution = (distribution) => {
        switch (distribution) {
            case 'flex-start':
            case 'flex-end':
                return distribution
                break;
            default:
                return 'center';
        }
    }

    backgroundColor = () => {
        const {backgroundColor = '#000000CC'} = this.props;
        return backgroundColor;
    }

    render() { //console.log('dialog rendered');
        return (
            <TouchableHighlight
                onPress={this.props.hide}
                style={{
                    backgroundColor: this.backgroundColor(),
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0
                }}>
                <View style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    justifyContent: this.checkDistribution(this.props.justifyContent),
                    alignItems: this.checkDistribution(this.props.alignItems),
                }}>
                    <KeyboardAvoidingView behavior="padding">
                        <TouchableHighlight>
                            {this.props.children}
                        </TouchableHighlight>
                    </KeyboardAvoidingView>
                </View>
            </TouchableHighlight>
        )
    }
}
