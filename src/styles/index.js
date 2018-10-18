export default (editor, config) => {
    const sm = editor.StyleManager;
    const csm = config.customStyleManager;
    sm.getSectors().reset(csm && csm.length ? csm : [{
            name: 'Typography',
            open: false,
            buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align'],
            properties: [
                {name: 'Font', property: 'font-family'},
                {name: 'Weight', property: 'font-weight'},
                {name: 'Font color', property: 'color'},
                {
                    property: 'text-align',
                    type: 'radio',
                    defaults: 'left',
                    list: [
                        {value: 'left', name: 'Left', className: 'fa fa-align-left'},
                        {value: 'center', name: 'Center', className: 'fa fa-align-center'},
                        {value: 'right', name: 'Right', className: 'fa fa-align-right'},
                        {value: 'justify', name: 'Justify', className: 'fa fa-align-justify'}
                    ]
                }]
        }, {
            name: 'Decorations',
            open: false,
            buildProps: ['opacity', 'background-color', 'border-radius', 'border', 'background'],
            properties: [{
                    type: 'slider',
                    property: 'opacity',
                    defaults: 1,
                    step: 0.01,
                    max: 1,
                    min: 0
                }, {
                    property: 'border-radius',
                    properties: [
                        {name: 'Top', property: 'border-top-left-radius'},
                        {name: 'Right', property: 'border-top-right-radius'},
                        {name: 'Bottom', property: 'border-bottom-left-radius'},
                        {name: 'Left', property: 'border-bottom-right-radius'}
                    ]
                }, {
                    property: 'background',
                    properties: [
                        {name: 'Image', property: 'background-image'},
                        {name: 'Repeat', property: 'background-repeat'},
                        {name: 'Position', property: 'background-position'},
                        {name: 'Attachment', property: 'background-attachment'},
                        {name: 'Size', property: 'background-size'}
                    ]
                } ]
        },
    ]);
}
