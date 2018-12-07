import openImport from './openImport';
import {
cmdImport,
        cmdAddBasicStyles,
        basicStyle,
        cmdDeviceDesktop,
        cmdDeviceTablet,
        cmdDeviceMobile,
        cmdClear,
        cmdHide,
        cmdShowHideManager,
        cmdHideHideManager,
        cmdToggleHideManager
} from './../consts';

export default (editor, config) => {
    const cm = editor.Commands;
    const txtConfirm = config.textCleanCanvas;


    cm.add(cmdAddBasicStyles, e => e.addComponents(basicStyle));
    cm.add(cmdImport, openImport(editor, config));
    cm.add(cmdDeviceDesktop, e => e.setDevice('Desktop'));
    cm.add(cmdDeviceTablet, e => e.setDevice('Tablet'));
    cm.add(cmdDeviceMobile, e => e.setDevice('Mobile portrait'));
    cm.add(cmdClear, e => {
        if (confirm(txtConfirm)) {
            e.runCommand('core:canvas-clear');
            e.runCommand(cmdAddBasicStyles);
        }
    });

    cm.add(cmdHide, (e, s, params) => {
        let hm = e.editor.get('HideManager');
        if (!hm) {
            console.error('Not Hide Manager found!')
            return;
        }

        let device = e.getDevice(),
                model = params.model || null;

        hm.hide(device, model);
    });

    cm.add(cmdShowHideManager, (e) => e.editor.get('HideManager').showView());
    cm.add(cmdHideHideManager, (e) => e.editor.get('HideManager').hideView());
    cm.add(cmdToggleHideManager, (e) => e.editor.get('HideManager').toggle());
}
