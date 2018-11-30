import grapesjs from 'grapesjs';

export default (editor) => {
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
    // close all the blocks
    editor.on('load', () => editor.BlockManager.getCategories().each(ctg => ctg.set('open', false)));
    // Add some new styles.
    editor.on('load', () => {
        editor.addComponents(`<style>
            .gjs-hovered{
                outline: 1px dashed #3899ec !important;
                outline-offset: 0px !important;
            }   
            .gjs-comp-selected{
                outline: 2px dashed #3899ec !important;
                outline-offset: 0px !important;
            }
        </style>`);
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

}
