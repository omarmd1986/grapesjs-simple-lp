import {
    showInDesktop,
    cmdHide
} from './../../consts';

module.exports = (editor) => {

    editor.on('component:selected', (model) => {
        let currentView = editor.getDevice();

        // HTML Element object
        var el = model.getEl();

        if (!el) {
            return;
        }

        let hasHideCommand = (tbArray) => {
            // Search the open-modal-cmd
            const f = tbArray.find((i) => {
                return (i.attributes && i.attributes.id && 'slp-hide-cmd' === i.attributes.id);
            });

            return (typeof f !== 'undefined');
        };

        let removeHideCommand = (tbArray) => {
            // Search the open-modal-cmd
            const index = tbArray.findIndex((i) => {
                return (i.attributes && i.attributes.id && 'slp-hide-cmd' === i.attributes.id);
            });

            (index > -1) && tbArray.splice(index, 1);

            return tbArray;
        };

        let addHideCommand = (tbArray) => {
            if (false === hasHideCommand(tbArray)) {
                tbArray.push({
                    attributes: {class: 'fa fa-eye-slash', id: 'slp-hide-cmd', title: 'Hide the element to this device'},
                    command: () => editor.runCommand(cmdHide, {model: model})
                });
            }

            return tbArray;
        };

        // Is a modal trigger here.
        var tb = model.get('toolbar');

        if (!tb.length) {
            return;
        }

        if ('Desktop' === currentView && (true !== editor.editor.get(showInDesktop))) {
            // Remove if exist
            tb = removeHideCommand(tb);
        } else {
            tb = addHideCommand(tb);
        }

        model.set('toolbar', tb);
    });
};
