module.exports = (editor, config) => {
    editor.editor.set('hideManager', {name:'hello'});
    
    
    console.log(editor.editor.get('hideManager'));
};