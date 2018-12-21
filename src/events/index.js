import grapesjs from 'grapesjs';
import styles from '../styles/';

import {cmdAddBasicStyles} from './../consts';

export default (editor, config) => {
    let $ = grapesjs.$;
    let pn = editor.Panels;

    let settingsManager = function () {

        // Load and show settings and style manager
        var openTmBtn = pn.getButton('views', 'open-tm');
        openTmBtn && openTmBtn.set('active', 1);
        var openSm = pn.getButton('views', 'open-sm');
        openSm && openSm.set('active', 1);
        // Add Settings Sector
        var traitsSector = $(`<div class="gjs-sm-sector no-select">
                <div class="gjs-sm-properties" style="display: none;"></div></div><br /><br />`);
        var traitsProps = traitsSector.find('.gjs-sm-properties');
        traitsProps.append($('.gjs-trt-traits'));
        $('.gjs-sm-sectors').before(traitsSector);

        traitsProps.get(0).style.display = 'block';
    };

    editor.on('load', settingsManager);
    editor.on('load', () => $('div.gjs-clm-tags').css('display', 'none'));
    editor.on('load', () => pn.removeButton('views', 'open-tm'));

    // img and video resizable
    editor.on('load', () => {
        var comps = editor.DomComponents;
        var originalImage = comps.getType('image');
        var originalVideo = comps.getType('video');

        comps.addType('image', {
            model: originalImage.model.extend({
                defaults: Object.assign({}, originalImage.model.prototype.defaults, {
                    resizable: {
                        // Unit used for height resizing
                        unitHeight: 'px',

                        // Unit used for width resizing
                        unitWidth: '%',

                        currentUnit: 0,

                        // Minimum dimension
                        minDim: 5,

                        // Maximum dimension
                        maxDim: 100,

                        // Handlers
                        tl: 0, // Top left
                        tc: 0, // Top center
                        tr: 0, // Top right
                        cl: 1, // Center left
                        cr: 1, // Center right
                        bl: 0, // Bottom left
                        bc: 0, // Bottom center
                        br: 0 // Bottom right
                    }
                })
            }),
            view: originalImage.view
        });
        comps.addType('video', {
            model: originalVideo.model.extend({
                defaults: Object.assign({}, originalVideo.model.prototype.defaults, {
                    resizable: {
                        // Unit used for height resizing
                        unitHeight: 'px',

                        // Unit used for width resizing
                        unitWidth: '%',

                        currentUnit: 0,

                        // Minimum dimension
                        minDim: 5,

                        // Maximum dimension
                        maxDim: 100,

                        // Handlers
                        tl: 0, // Top left
                        tc: 0, // Top center
                        tr: 0, // Top right
                        cl: 1, // Center left
                        cr: 1, // Center right
                        bl: 0, // Bottom left
                        bc: 0, // Bottom center
                        br: 0 // Bottom right
                    }
                })
            }),
            view: originalVideo.view
        });
    });

    // close all the blocks
    editor.on('load', () => editor.BlockManager.getCategories().each(ctg => ctg.set('open', false)));

    // Add some new styles.
    editor.on('load', () => editor.runCommand(cmdAddBasicStyles));

    // change the style
    editor.on('load', () => styles(editor, config));

    // Sorting the Categories.
    editor.on('load', () => {
        const blockManager = editor.BlockManager;
        let cat = blockManager.getCategories();
        cat.each(c => c.set('order', 10));
        [
            'Containers'
                    , 'Basic'
                    , 'Forms'
                    , 'Extra'
                    , 'Advanced'
                    , 'Marketing'
                    , 'Social'
        ].forEach((k, o) => {
            let ca = cat.find(c => c.get('label').toLowerCase() === k.toLowerCase());
            ca && ca.set('order', o);
        });
        blockManager.render();
    });

    // Adding a new random class to avoid changes in all the elements with the same class
    editor.on('component:selected', (model) => {
        let el = model.getEl();

        if (!el) {
            return;
        }

        // Has the custom class Simple Landing Page plug-in
        if (el.className.includes('slp-')) {
            return;
        }

        let id = Date.now();
        el.classList.add('slp-' + id);

        let split = el.className.split(' ').filter(w => !w.includes('gjs'));
        model.setClass(split.join(' '));
    });

    editor.on('canvas:drop', (dataTransfer, model) => {
        let el = model.getEl();

        if (!el) {
            return;
        }

        el.classList.add('slp-dropIn');
    });


    let promises = [];

    promises.push(new Promise((resolve, reject) => {
//        editor.on('load', resolve);
        editor.on('load', () => {
            console.debug('LOAD COMPLETE')
            resolve();
        });
    }));

    promises.push(new Promise((resolve, reject) => {
        const config = editor.StorageManager.getConfig();

        if (config.type && config.type === 'remote') {
//            editor.on('storage:load', resolve)
//            editor.on('storage:error', reject)
            editor.on('storage:load', () => {
                console.debug('storage load')
                resolve();
            })
            editor.on('storage:error', (e) => {
                console.debug('storage error')
                reject(e)
            })
        } else {
            console.debug('config type is local')
            resolve();
        }
    }));

    promises.push(new Promise((resolve, reject) => {
//        window.onload = resolve;
//        window.onerror = reject;
        window.onload = () => {
            console.debug('window onload')
            resolve()
        };
        window.onerror = (e) => {
            console.debug('window onerror')
            reject(e)
        };
    }));

    Promise.all(promises).then((d) => editor.trigger('spl:loaded', d)).catch((e) => editor.trigger('spl:loaded:error', e));

};
