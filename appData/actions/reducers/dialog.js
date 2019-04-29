/**
 * React Native App
 * Made by Daniel Padilla
 */

import {dialogType} from "../../reducers/dialogReducer";


export const showDialog = (title,text) =>{
    return{
        type: dialogType.SET_DIALOG,
        title,
        text
    }
}

export const showYNDialog = (title,text,cancelAction,acceptAction) =>{
    return{
        type: dialogType.SET_YNDIALOG,
        title,
        text,
        cancelAction,
        acceptAction
    }
}

export const showCustomDialog = (customDialog) =>{
    return{
        type: dialogType.SET_CUSTOMDIALOG,
        customDialog
    }
}

export const showTestScreenDialog = (customDialog) =>{
    return{
        type: dialogType.SET_TESTSCREENDIALOG
    }
}

export const hideDialog = () =>{
    return{
        type: dialogType.ERASE_DIALOG
    }
}

