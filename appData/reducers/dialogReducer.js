/**
 * React Native App
 * Made by Daniel Padilla
 */


export const dialogType= {
    SET_DIALOG:'SET_DIALOG',
    SET_YNDIALOG:'SET_YNDIALOG',
    SET_CUSTOMDIALOG:'SET_CUSTOMDIALOG',
    SET_TESTSCREENDIALOG:'SET_TESTSCREENDIALOG',
    ERASE_DIALOG:'ERASE_DIALOG'
}


export const dialog = (state = {
    dialogVisible:false,
    yNDialogVisible:false,
    customDialogVisible:false,
    testScreenDialogVisible:false,
    dialogTitle:undefined,
    dialogText:undefined,
    customDialog:undefined
}, action) => {
    switch (action.type) {

        case dialogType.SET_DIALOG:
            return Object.assign({},state,{
                dialogTitle:action.title,
                dialogText:action.text,
                dialogVisible:true,
            });
        case dialogType.SET_YNDIALOG:
            return Object.assign({},state,{
                dialogTitle:action.title,
                dialogText:action.text,
                cancelAction:action.cancelAction,
                acceptAction: action.acceptAction,
                yNDialogVisible:true,
            });
        case dialogType.SET_CUSTOMDIALOG:
            return Object.assign({},state,{
                customDialogVisible:true,
                customDialog:action.customDialog
            });
        case dialogType.SET_TESTSCREENDIALOG:
            return Object.assign({},state,{
                testScreenDialogVisible:true,
            });
        case dialogType.ERASE_DIALOG:
            return Object.assign({},state,{
                dialogTitle:undefined,
                dialogText:undefined,
                dialogVisible:false,
                yNDialogVisible:false,
                customDialogVisible:false,
                testScreenDialogVisible:false
            });
        default:
            return state;
    }

}
