import grapesjs from 'grapesjs';
import interact from 'interactjs'

module.exports = editor => {
    let $ = grapesjs.$;

    var currentView = editor.getDevice();

    var Container = require('./Container');
    Container = new Container().init('slp-hide-manager').hide();
    
    var updateView = function() {
        if (currentView === editor.getDevice()) {
            // do nothing. The user hit the button twice
            return;
        }
        currentView = editor.getDevice();

        if ('Desktop' === currentView) {
            // Hide the container
            Container.hide();
            return;
        }
        
        Container.show();
    }
    
    return {
        init() {
            editor.on('run:set-device-desktop', updateView);
            editor.on('run:set-device-tablet', updateView);
            editor.on('run:set-device-mobile', updateView);

            return this;
        }
        
    };

};
