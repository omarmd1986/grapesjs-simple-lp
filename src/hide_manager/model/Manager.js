import grapesjs from 'grapesjs';
import interact from 'interactjs';
import Toolbar from './../view/Toolbar';

module.exports = editor => {
    var currentView = null;

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

        // remove all the elements hide in this device.
        View.reset(list(currentView));

        if ('Desktop' === currentView) {
            // Hide the container
            View.hide();
            return;
        }

        View.show();
    }

    var removeComponent = (model) => {
        for (var device in layers) {
            layers[device].delete(model)
        }
        refreshList();
    };

    var refreshList = () => View.reset(list(currentView));

    var idFy = id => id.toLowerCase().split(' ').join('-');

    var list = device => layers[idFy(device)] || [];

    /**
     * Load the hide components,
     * @returns {undefined}
     */
    (function () {
        var hasClass = (model) => {
            model.get('classes').each(c => {
                if (c.get('name') && c.get('name').startsWith('spl-hide-')) {
                    let device = c.get('name').split('spl-hide-')[1];
                    
                    if (!layers[device]) {
                        layers[device] = new Set();
                    }
                    
                    layers[device].has(model) ? null : layers[device].add(model);
                }
            });

            return true;
        };

        var getAllComponents = (model, result = [], eva = hasClass) => {
            eva && eva(model) && result.push(model);
            model.components().each(mod => getAllComponents(mod, result));
            return result;
        };

        getAllComponents(editor.DomComponents.getWrapper());
        
        // updateView
        updateView();
    })();

    return {
        init() {
            // Load all the components hide by devices here
            // Ask the editor about all his components
            // and detect the hiden class and populate the layers object groug by devices.

            editor.on('run:set-device-desktop', updateView);
            editor.on('run:set-device-tablet', updateView);
            editor.on('run:set-device-mobile', updateView);
            editor.on('run:core:canvas-clear', this.clear);
            editor.on('component:remove', removeComponent);

            View.itemRemoveCb(this.show);

            Toolbar(editor);
            
            return this;
        },

        clear(device) {
            device ? layers[device] = new Set() : layers = {};
            refreshList();
        },

        hideView() {
            View.hide();
        },

        showView() {
            View.show();
        },

        toggle() {
            View.isHide() ? this.showView() : this.hideView();
        },

        list(device) {
            return list(device);
        },

        hide(device, model) {
            /*If not created*/
            const d = idFy(device)

            if (!layers[d]) {
                layers[d] = new Set();
            }

            layers[d].has(model) ? null : layers[d].add(model);

            // Add classes
            model.addClass(`spl-hide-${d}`);

            refreshList();
        },

        show(device, model) {
            if (typeof device === 'object') {
                // Was trigger from the view.
                console.log(device)
                model = device;
                device = currentView;
            }
            const d = idFy(device);

            if (!layers[d]) {
                layers[d] = new Set();
            }

            layers[d].delete(model)

            // Add classes
            model.removeClass(`spl-hide-${d}`);

            refreshList();
        }

    };

};
