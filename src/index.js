import grapesjs from 'grapesjs';
import pluginBlocks from 'grapesjs-blocks-basic';
import pluginCountdown from 'grapesjs-component-countdown';
import pluginNavbar from 'grapesjs-navbar';
import pluginExport from 'grapesjs-plugin-export';
import pluginForms from 'grapesjs-plugin-forms';
import pluginHeader from 'grapesjs-plugin-header';
import pluginSocial from 'grapesjs-plugin-social';
import pluginActions from 'grapesjs-plugin-actions';
import pluginAvance from 'grapesjs-blocks-avance';
import pluginSproutvideo from 'grapesjs-plugin-sproutvideo';
import pluginModal from 'grapesjs-plugin-modal';
import customBlocks from 'grapesjs-custom-blocks';
import carousel from 'grapesjs-plugin-carousel';

import commands from './commands';
import blocks from './blocks';
import components from './components';
import panels from './panels';
import styles from './styles';
import events from './events';
import modifiers from './modifiers';
import hideManager from './hide_manager';

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

        // Use to modify the link tratis
        linkBehavior: {
            traitLabel: 'Add on',
            name: 'addon',
            wildcard: '',
            options: []
        },
        
        allowHideCmInDesktop: true,

        // `grapesjs-blocks-basic` plugin options
        // By setting this option to `false` will avoid loading the plugin
        blocksBasicOpts: {
            flexGrid: 1,
            stylePrefix: `mrk-row-` // To avoid CSS conflicts whit bootstrap
        },

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
        formsOpts: {
            blocks: ['form']
        },

        // `grapesjs-plugin-header` plugin options
        // By setting this option to `false` will avoid loading the plugin
        headerOpts: {},

        // `grapesjs-plugin-social` plugin options
        // By setting this option to `false` will avoid loading the plugin
        socialOpts: {
            blocks: ['link', 'link-block'],
        },

        // `grapesjs-plugin-actions` plugin options
        // By setting this option to `false` will avoid loading the plugin
        actionsOpts: {},

        // `grapesjs-blocks-avance` plugin options
        // By setting this option to `false` will avoid loading the plugin
        avanceOpts: {
            blocks: ['grid-items', 'list-items', 'header', 'section', 'footer', 'iframe', 'button', 'progress-bar'],
        },

        // `grapesjs-plugin-sproutvideo` plugin options
        // By setting this option to `false` will avoid loading the plugin
        sproutOpts: {},

        // `grapesjs-plugin-modal` plugin options
        // By setting this option to `false` will avoid loading the plugin
        modalOpts: {},

        // `grapesjs-plugin-modal` plugin options
        // By setting this option to `false` will avoid loading the plugin
        customBlocksOpts: {},

        // `grapesjs-plugin-carousel` plugin options
        // By setting this option to `false` will avoid loading the plugin
        carouselOpts: {},
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

        headerOpts,
        socialOpts,
        actionsOpts,
        avanceOpts,
        sproutOpts,
        modalOpts,
        customBlocksOpts,
        carouselOpts,
    } = config;

    // Load plugins
    blocksBasicOpts && pluginBlocks(editor, blocksBasicOpts);
    countdownOpts && pluginCountdown(editor, countdownOpts);
    navbarOpts && pluginNavbar(editor, navbarOpts);
    exportOpts && pluginExport(editor, exportOpts);
    formsOpts && pluginForms(editor, formsOpts);

    // Change some components
    modifiers(editor, config);

    headerOpts && pluginHeader(editor, headerOpts);
    actionsOpts && pluginActions(editor, actionsOpts);
    avanceOpts && pluginAvance(editor, avanceOpts);
    socialOpts && pluginSocial(editor, socialOpts);
    sproutOpts && pluginSproutvideo(editor, sproutOpts);
    modalOpts && pluginModal(editor, modalOpts);
    customBlocksOpts && customBlocks(editor, customBlocksOpts);
    carouselOpts && carousel(editor, carouselOpts);

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
    
    // Catch events
    hideManager(editor, config);

});
