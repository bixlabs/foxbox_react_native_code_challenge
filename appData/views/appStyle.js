import {Dimensions, StyleSheet} from 'react-native';

export const appStyle = StyleSheet.create({
    smallIcon: {
        width: 15,
        height: 15
    },
    icon: {
        width: 20,
        height: 20
    },
    mediumIcon: {
        width: 30,
        height: 30
    },
    bigIcon: {
        width: 40,
        height: 40
    },
    container: {
        flex: 1
    },
    bigSection: {
        fontSize: 24
    },
    smallSection: {
        fontSize: 18,
    },
    subSection: {
        fontSize: 16,
    },
    textSection: {
        fontSize: 15,
    },
});

export const colors = {
    mainColor: '#00C1D2',
    textColor: '#7b7b7b',
    white: '#fff'
    // your colors
};


/* Transparency List
*
* 100% — FF
* 95% — F2
* 90% — E6
* 85% — D9
* 80% — CC
* 75% — BF
* 70% — B3
* 65% — A6
* 60% — 99
* 55% — 8C
* 50% — 80
* 45% — 73
* 40% — 66
* 35% — 59
* 30% — 4D
* 25% — 40
* 20% — 33
* 15% — 26
* 10% — 1A
* 5% — 0D
* 0% — 00
*
* */

export const dimensions = {
    normalGap: 40,
    thinLine: 2,
    line: 1,
    miniLine: 0.5,
    microLine: 0.3,
    mealSlotRatio: 0.948,
    d13: 13,
    d16: 16,
    d18: 18,
    squarePLRatio: 0.452
};