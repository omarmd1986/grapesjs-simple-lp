module.exports = (editor, config) => {

    editor.on('load', () => {
        var Manager = require('./model/Manager');
        editor.editor.set('HideManager', new Manager(editor).init());
    });

};