import grapesjs from 'grapesjs';
import pluginBlocks from 'grapesjs-blocks-basic';
import pluginCountdown from 'grapesjs-component-countdown';
import pluginNavbar from 'grapesjs-navbar';
import pluginExport from 'grapesjs-plugin-export';
import pluginForms from 'grapesjs-plugin-forms';
import pluginSlider from 'grapesjs-lory-slider';
import pluginHeader from 'grapesjs-plugin-header';
import pluginSocial from 'grapesjs-plugin-social';
import pluginActions from 'grapesjs-plugin-actions';
import pluginAvance from 'grapesjs-blocks-avance';
import pluginSproutvideo from 'grapesjs-plugin-sproutvideo';
import pluginModal from 'grapesjs-plugin-modal';

import commands from './commands';
import blocks from './blocks';
import components from './components';
import panels from './panels';
import styles from './styles';
import events from './events';

export default grapesjs.plugins.add('grapesjs-simple-lp', (editor, opts = {}) => {
    let config = opts;

    let defaults = {
        // Which blocks to add
        blocks: ['link-block', 'quote', 'text-basic'],

        // Modal import title
        modalImportTitle: 'Import',

        // Modal import button text
        modalImportButton: 'Import',

        // Import description inside import modal
        modalImportLabel: '',

        // Default content to setup on import model open.
        // Could also be a function with a dynamic content return (must be a string)
        // eg. modalImportContent: editor => editor.getHtml(),
        modalImportContent: '',

        // Code viewer (eg. CodeMirror) options
        importViewerOptions: {},

        // Confirm text before cleaning the canvas
        textCleanCanvas: 'Are you sure to clean the canvas?',

        // Show the Style Manager on component change
        showStylesOnChange: 1,

        // Text for General sector in Style Manager
        textGeneral: 'General',

        // Text for Layout sector in Style Manager
        textLayout: 'Layout',

        // Text for Typography sector in Style Manager
        textTypography: 'Typography',

        // Text for Decorations sector in Style Manager
        textDecorations: 'Decorations',

        // Text for Extra sector in Style Manager
        textExtra: 'Extra',

        // Use custom set of sectors for the Style Manager
        customStyleManager: [],

        // `grapesjs-blocks-basic` plugin options
        // By setting this option to `false` will avoid loading the plugin
        blocksBasicOpts: {},

        // `grapesjs-component-countdown` plugin options
        // By setting this option to `false` will avoid loading the plugin
        countdownOpts: {},

        // `grapesjs-navbar` plugin options
        // By setting this option to `false` will avoid loading the plugin
        navbarOpts: {},

        // `grapesjs-plugin-export` plugin options
        // By setting this option to `false` will avoid loading the plugin
        exportOpts: {},

        // `grapesjs-plugin-forms` plugin options
        // By setting this option to `false` will avoid loading the plugin
        formsOpts: {},

        // `grapesjs-lory-slider` plugin options
        // By setting this option to `false` will avoid loading the plugin
        sliderOpts: {},

        // `grapesjs-plugin-header` plugin options
        // By setting this option to `false` will avoid loading the plugin
        headerOpts: {},

        // `grapesjs-plugin-social` plugin options
        // By setting this option to `false` will avoid loading the plugin
        socialOpts: {},

        // `grapesjs-plugin-actions` plugin options
        // By setting this option to `false` will avoid loading the plugin
        actionsOpts: {},

        // `grapesjs-blocks-avance` plugin options
        // By setting this option to `false` will avoid loading the plugin
        avanceOpts: {},

        // `grapesjs-plugin-sproutvideo` plugin options
        // By setting this option to `false` will avoid loading the plugin
        sproutOpts: {},

        // `grapesjs-plugin-modal` plugin options
        // By setting this option to `false` will avoid loading the plugin
        modalOpts: {},
    };

    // Load defaults
    for (let name in defaults) {
        if (!(name in config))
            config[name] = defaults[name];
    }

    const {
        blocksBasicOpts,
        countdownOpts,
        navbarOpts,
        exportOpts,
        formsOpts,

        sliderOpts,
        headerOpts,
        socialOpts,
        actionsOpts,
        avanceOpts,
        sproutOpts,
        modalOpts
    } = config;

    // Load plugins
    blocksBasicOpts && pluginBlocks(editor, blocksBasicOpts);
    countdownOpts && pluginCountdown(editor, countdownOpts);
    navbarOpts && pluginNavbar(editor, navbarOpts);
    exportOpts && pluginExport(editor, exportOpts);
    formsOpts && pluginForms(editor, formsOpts);

    sliderOpts && pluginSlider(editor, sliderOpts);
    headerOpts && pluginHeader(editor, headerOpts);
    socialOpts && pluginSocial(editor, socialOpts);
    actionsOpts && pluginActions(editor, actionsOpts);
    avanceOpts && pluginAvance(editor, avanceOpts);
    sproutOpts && pluginSproutvideo(editor, sproutOpts);
    modalOpts && pluginModal(editor, modalOpts);

    // Load components
    components(editor, config);

    // Load blocks
    blocks(editor, config);

    // Load commands
    commands(editor, config);

    // Load panels
    panels(editor, config);

    // Load styles
    styles(editor, config);

    // Catch events
    events(editor);

});