import {
cmdImport,
        cmdDeviceDesktop,
        cmdDeviceTablet,
        cmdDeviceMobile,
        cmdClear,
        cmdToggleHideManager
} from './../consts';

export default (editor, config) => {
    const pn = editor.Panels;
    const eConfig = editor.getConfig();
    const crc = 'create-comp';
    const mvc = 'move-comp';
    const swv = 'sw-visibility';
    const expt = 'export-template';
    const osm = 'open-sm';
    const otm = 'open-tm';
    const ola = 'open-layers';
    const obl = 'open-blocks';
    const ful = 'fullscreen';
    const prv = 'preview';

    eConfig.showDevices = 0;

    pn.getPanels().reset([{
            id: 'commands',
            buttons: [{}],
        }, {
            id: 'options',
            buttons: [{
                    id: swv,
                    command: swv,
                    context: swv,
                    className: 'fa fa-square-o',
                    attributes: { title: 'View components' }
                }, {
                    id: 'undo',
                    className: 'fa fa-undo',
                    command: e => e.runCommand('core:undo'),
                    attributes: { title: 'Undo' }
                }, {
                    id: 'redo',
                    className: 'fa fa-repeat',
                    command: e => e.runCommand('core:redo'),
                    attributes: { title: 'Redo' }
                }, {
                    id: cmdImport,
                    className: 'fa fa-download',
                    command: e => e.runCommand(cmdImport),
                    attributes: { title: 'Import' }
                }, {
                    id: cmdClear,
                    className: 'fa fa-trash',
                    command: e => e.runCommand(cmdClear),
                    attributes: { title: 'Clear the canvas' }
                }],
        }, {
            id: 'views',
            buttons: [{
                    id: osm,
                    command: osm,
                    active: true,
                    className: 'fa fa-paint-brush',
                    attributes: { title: 'Open the Style Manager' },
                }, {
                    id: otm,
                    command: otm,
                    className: 'fa fa-cog',
                    visible: false
                }, {
                    id: obl,
                    command: obl,
                    className: 'fa fa-th-large',
                    attributes: { title: 'Open the Blocks Manager' },
                }],
        }]);

    // Add devices buttons
    const panelDevices = pn.addPanel({id: 'devices-c'});
    panelDevices.get('buttons').add([{
            id: cmdDeviceDesktop,
            command: cmdDeviceDesktop,
            className: 'fa fa-desktop',
            active: 1,
            attributes: { title: 'Change to Desktop mode' },
        }, {
            id: cmdDeviceTablet,
            command: cmdDeviceTablet,
            className: 'fa fa-tablet',
            attributes: { title: 'Change to Tablet mode' },
        }, {
            id: cmdDeviceMobile,
            command: cmdDeviceMobile,
            className: 'fa fa-mobile',
            attributes: { title: 'Change to Mobile mode' },
        }, {
            id: cmdToggleHideManager,
            command: e => e.runCommand(cmdToggleHideManager),
            className: 'fa fa-eye-slash',
            attributes: { title: 'Show/Hide the Hide Manager' },
            context: cmdToggleHideManager,
        }]);

    const openBl = pn.getButton('views', obl);
    editor.on('load', () => openBl && openBl.set('active', 1));

    // On component change show the Style Manager
    config.showStylesOnChange && editor.on('component:selected', () => {
        const openSmBtn = pn.getButton('views', osm);
        const openLayersBtn = pn.getButton('views', ola);

        // Don't switch when the Layer Manager is on or
        // there is no selected component
        if ((!openLayersBtn || !openLayersBtn.get('active')) && editor.getSelected()) {
            openSmBtn && openSmBtn.set('active', 1);
        }
    });
}
