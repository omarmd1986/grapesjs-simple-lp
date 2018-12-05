import {
    showInDesktop
} from './../consts';

module.exports = (editor, config) => {

    editor.on('load', () => {
        // Allor or not hide in desktop.
        // Will control the toolbar action.
        editor.editor.set(showInDesktop, config.allowHideCmInDesktop)
        
        var Manager = require('./model/Manager');
        editor.editor.set('HideManager', new Manager(editor).init());
    });

};