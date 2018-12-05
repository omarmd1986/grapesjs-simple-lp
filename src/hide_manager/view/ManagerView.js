import grapesjs from 'grapesjs';
import interact from 'interactjs'

module.exports = () => {
    let $ = grapesjs.$;


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
                <div id="${_id}" class="left-panel-frame panel-index-undefined hidden-items-panel" style="visibility: inherit; opacity: 1;">
                    <header class="panel-header light">
                        <div class="panel-header-title">
                            <div class="panel-header-title-content">
                                <span>Hidden Elements (0)</span>
                            </div>
                        </div>
                    </header>
                    <div class="left-panel-frame-content hidden-items-panel">
                        <div class="custom-scroll " style="height: inherit;">
                            <div class="outer-container" style="height: 100%;">
                                <div class="inner-container" style="height: 100%; margin-right: -15px;">
                                    <div class="content-wrapper" style="height: 100%; overflow-y: visible; margin-right: 0px;">
                                        <div class="content">
                                            <div class="scrollable">
                                                <div class="no-items">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        min: {width: 100, height: 50},
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

        show() {
            let c = _container;
            if (!c) {
                console.error('Container not found!');
                return;
            }
            c.css('display', 'block');
            return this;
        },

        hide() {
            let c = _container;
            if (!c) {
                console.error('Container not found!');
                return;
            }
            c.css('display', 'none');
            return this;
        }
    };

};
