export default (editor, config = {}) => {
    const domc = editor.DomComponents;
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;
    // ...


    // Add new component.
    const TYPE = 'splRow';

    var $ = editor.$;

    let ele = null
            , mouseEvent = null;

    var model = defaultModel.extend({

        defaults: {
            ...defaultModel.prototype.defaults,
            droppable: true,

            resizable: {

                keyWidth: 'class',
                unitWidth: '',
                onStart: function (event, el) {
                    ele = el.el;
                    return '';
                },
                onMove: function (event) {
                    mouseEvent = (mouseEvent === null) ? event : mouseEvent;

                    let w = mouseEvent.view || window;
                    
                    let offset = Math.abs(mouseEvent.clientX - event.clientX);
                    
                    let pc = offset * 100 / w.innerWidth;

                    if (pc < 8.333333333) {
                        return '';
                    }

                    let isLeftMove = (mouseEvent.clientX > event.clientX);

                    let classes = $(ele).attr('class').split(' ');
                    let c = classes.find(cl => cl.includes('spl-col-md-'));
                    let col = c ? parseInt(c.split('-').pop()) : 0;
                    
                    $(ele).removeClass(`spl-col-md-${col}`);

                    if (isLeftMove && col > 1) {
                        //decrease the el class spl-col-md-#
                        col--;
                    } else if(!isLeftMove && col < 12){
                        //increase the el class spl-col-md-#
                        col++;
                    }
                    $(ele).addClass(`spl-col-md-${col}`);

                    mouseEvent = event;

                    return '';
                },
                
                onEnd: function(){
                    ele = null;
                    mouseEvent = null;    
                },

                tl: 0, // Top left
                tc: 0, // Top center
                tr: 0, // Top right
                cl: 0, // Center left
                cr: 1, // Center right
                bl: 0, // Bottom left
                bc: 0, // Bottom center
                br: 0 // Bottom right
            },

            traits: [],
        }
    }, {
        isComponent(el) {

            if (el.tagName === 'DIV' && (
                    el.className.includes(`spl-col-md-1`)
                    || el.className.includes(`spl-col-md-2`)
                    || el.className.includes(`spl-col-md-3`)
                    || el.className.includes(`spl-col-md-4`)
                    || el.className.includes(`spl-col-md-5`)
                    || el.className.includes(`spl-col-md-6`)
                    || el.className.includes(`spl-col-md-7`)
                    || el.className.includes(`spl-col-md-8`)
                    || el.className.includes(`spl-col-md-9`)
                    || el.className.includes(`spl-col-md-10`)
                    || el.className.includes(`spl-col-md-11`)
                    || el.className.includes(`spl-col-md-12`)
                    )) {
                return {type: TYPE};
            }
            return '';
        }
    });

    var view = defaultView.extend({});

    domc.addType(TYPE, {

        model: model,

        view: view
    });
}
