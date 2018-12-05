import grapesjs from 'grapesjs';
import interact from 'interactjs';
import Toolbar from './../view/Toolbar';

module.exports = editor => {
    var currentView = editor.getDevice();

    var View = require('./../view/ManagerView');
    View = new View().init('slp-hide-manager').hide();

    /**
     * Will hold the components to be hide
     * @type object
     */
    var layers = {};

    var updateView = function () {
        if (currentView === editor.getDevice()) {
            // do nothing. The user hit the button twice
            return;
        }
        currentView = editor.getDevice();

        if ('Desktop' === currentView) {
            // Hide the container
            View.hide();
            return;
        }

        View.show();
    }

    return {
        init() {
            editor.on('run:set-device-desktop', updateView);
            editor.on('run:set-device-tablet', updateView);
            editor.on('run:set-device-mobile', updateView);

            Toolbar(editor);

            return this;
        },

        hideView() {
            View.hide();
        },

        showView() {
            View.show();
        },

        toogle() {
            View.isHide() ? this.showView() : this.hideView();
        },

        hide(device, model) {
            /*If not created*/
            const d = device.toLowerCase().split(' ').join('-');

            if (!layers[d]) {
                layers[d] = [];
            }

            layers[d].push(model);

            // Add classes
            model.addClass(`hide-${d}`);

            console.log(layers)
        }

    };

};
