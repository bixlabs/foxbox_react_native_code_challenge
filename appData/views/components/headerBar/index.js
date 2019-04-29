/**
 * React Native App
 * Made by Daniel Padilla
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Button, TouchableHighlight} from 'react-native';
import {appStyle, colors} from "../../appStyle";

//import dev from "../api/log";

const navbarPadding = 0;

export class HeaderBar extends React.Component {


    getBackgroundColor = () => {
        if (typeof this.props.backgroundColor != "undefined") {
            return this.props.backgroundColor;
        } else {
            return colors.mainColor;
        }
    };

    getTitleTextColor = () => {
        if (typeof this.props.titleTextColor != "undefined") {
            return this.props.titleTextColor;
        } else {
            return colors.white;
        }
    };

    getAlignItems = () => {
        return this.props.alignItems ? this.props.alignItems : 'center';
    };

    getPadding = () => {
        return this.props.padding ? this.props.padding : 0;
    }

    render() { //console.log('header bar rendered')
        const {user, leftIcon, showUserPicture} = this.props;
        const profilePicStyle = {
            width: 40,
            height: 40,
            borderRadius: 20
        };
        return (
            <View style={
                [
                    this.props.style,
                    {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: this.getAlignItems(),
                        height: 60 + navbarPadding,
                        padding: this.getPadding(),
                        backgroundColor: this.getBackgroundColor()
                    }
                ]
            }>
                <TouchableHighlight
                    onPress={this.props.leftAction}
                    underlayColor={'#00000000'}
                >
                    <Image
                        style={[
                            {
                                marginLeft: 10,
                                tintColor: this.props.tintColor
                            },
                            this.props.bigIcon ? appStyle.bigIcon : appStyle.icon
                        ]}
                        source={leftIcon}
                        resizeMode='contain'/>

                </TouchableHighlight>

                <View
                    style={{flex: 1}}>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: '500',
                        color: this.getTitleTextColor(),
                        textAlign: 'center'
                    }}>{this.props.title}</Text>
                </View>
                <TouchableHighlight
                    onPress={this.props.rightAction}
                    underlayColor={'#00000000'}>
                    <Image
                        style={[
                            this.props.bigIcon ? appStyle.bigIcon : appStyle.icon,
                            {
                                marginRight: 10,
                                tintColor: this.props.tintColor
                            }
                        ]}
                        source={this.props.rightIcon}
                        resizeMode='contain'/>
                </TouchableHighlight>
            </View>
        );
    }
}
