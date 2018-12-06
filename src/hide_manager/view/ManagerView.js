import grapesjs from 'grapesjs';
import interact from 'interactjs'

module.exports = () => {
    let $ = grapesjs.$;
    
    // Extend the cash-dom library to support animations.
    (function(){
        // Extend the cash-dom functionalities
        $.fn.extend({
            animateCss: function (animationName, callback) {
                var animationEnd = (function (el) {
                    var animations = {
                        animation: 'animationend',
                        OAnimation: 'oAnimationEnd',
                        MozAnimation: 'mozAnimationEnd',
                        WebkitAnimation: 'webkitAnimationEnd',
                    };

                    for (var t in animations) {
                        if (el.style[t] !== undefined) {
                            return animations[t];
                        }
                    }
                })(document.createElement('div'));

                this.addClass('animated ' + animationName).one(animationEnd, function () {
                    $(this).removeClass('animated ' + animationName);

                    if (typeof callback === 'function')
                        callback();
                });

                return this;
            },
        });
    })();
    
    var dragMoveListener = function (event) {

        var target = event.target,
                // keep the dragged position in the data-x/data-y attributes
                x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        // translate the element
        target.style.webkitTransform =
                target.style.transform =
                'translate(' + x + 'px, ' + y + 'px)';

        // update the posiion attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    };

    var getContainer = function () {
        let container = $(`#${_id}`);

        if (container && container.length) {
            // The container was created do something here

        } else {
            const html = `
                <div id="${_id}" class="animated faster left-panel-frame hidden-items-panel">
                    <header class="panel-header light">
                        <div class="panel-header-title">
                            <div class="panel-header-title-content">
                                <span>Hidden Elements</span>
                            </div>
                        </div>
                    </header>
                    <div class="left-panel-frame-content hidden-items-panel">
                        <div class="container-comps"></div>
                    </div>
                </div>
                `;

            // The container is not created
            $('.gjs-cv-canvas').append(html);
            
            container = $(`#${_id}`);

            iniInteract(`#${_id}`);
        }

        return container;
    };

    var iniInteract = function (id) {
        interact(id)
                .draggable({
                    // enable inertial throwing
                    inertia: true,
                    allowFrom: '.panel-header',
                    // keep the element within the area of it's parent
                    restrict: {
                        restriction: "parent",
                        endOnly: true,
                        elementRect: {top: 0, left: 0, bottom: 1, right: 1}
                    },
                    // enable autoScroll
                    autoScroll: false,

                    // call this function on every dragmove event
                    onmove: dragMoveListener,
                    // call this function on every dragend event
                    onend: function (event) {

                    }
                })
                .resizable({
                    // resize from all edges and corners
                    edges: {left: true, right: true, bottom: true, top: true},

                    // keep the edges inside the parent
                    restrictEdges: {
                        outer: 'parent',
                        endOnly: true,
                    },

                    // minimum size
                    restrictSize: {
                        min: {width: 220, height: 300},
                    },

                    inertia: true,
                })
                .on('resizemove', function (event) {
                    var target = event.target,
                            x = (parseFloat(target.getAttribute('data-x')) || 0),
                            y = (parseFloat(target.getAttribute('data-y')) || 0);

                    // update the element's style
                    target.style.width = event.rect.width + 'px';
                    target.style.height = event.rect.height + 'px';

                    // translate when resizing from top or left edges
                    x += event.deltaRect.left;
                    y += event.deltaRect.top;

                    target.style.webkitTransform = target.style.transform =
                            'translate(' + x + 'px,' + y + 'px)';

                    target.setAttribute('data-x', x);
                    target.setAttribute('data-y', y);
                });
    };

    var desIdFy = id => id.toUpperCase().split('-').join(' ').split('_').join(' ');

    var _id = null;
    var _container = null;

    return {
        init(id) {
            _id = id;
            _container = getContainer();
            return this;
        },

        get() {
            return _container;
        },

        isHide() {
            let c = _container;
            if (!c) {
                console.error('Container not found!');
                return true;
            }
            return ('none' === c.css('display'));
        },

        show() {
            let c = _container;
            if (!c) {
                console.error('Container not found!');
                return;
            }
            c.css('display', 'block');
            c.animateCss('fadeIn faster')
            return this;
        },

        hide() {
            let c = _container;
            if (!c) {
                console.error('Container not found!');
                return;
            }
            c.animateCss('fadeOut faster', () => {c.css('display', 'none')})
            return this;
        },

        /**
         * 
         * @param {type} modelCollection
         * @returns {undefined}
         */
        reset(modelCollection) {
            _container.find('.container-comps').html('');
            modelCollection.forEach(model => this.add(model));
        },

        add(model) {
            let type = "" === model.get('type') ? model.get('tagName') : model.get('type')
            let name = desIdFy(type);
            
            const html = `<div class="hidden-item">
                            <div class="icon fa fa-${type}"></div>
                            <div class="label">${name}: </div>
                            <div class="add-button"></div>
                        </div>`;
            
            $(html).prependTo(_container.find('.container-comps').first());
        }
    };

};
