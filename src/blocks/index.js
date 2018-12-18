export default (editor, config) => {
    const bm = editor.BlockManager;
    const toAdd = name => config.blocks.indexOf(name) >= 0;

    toAdd('link-block') && bm.add('link-block', {
        category: 'Basic',
        label: 'Link Block',
        attributes: {class: 'fa fa-link'},
        content: {
            type: 'link',
            editable: false,
            droppable: true,
            style: {
                display: 'inline-block',
                padding: '5px',
                'min-height': '50px',
                'min-width': '50px'
            }
        },
    });

    toAdd('quote') && bm.add('quote', {
        label: 'Quote',
        category: 'Basic',
        attributes: {class: 'fa fa-quote-right'},
        content: `<blockquote class="quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
      </blockquote>`
    });

    toAdd('text-basic') && bm.add('text-basic', {
        category: 'Basic',
        label: 'Text section',
        attributes: {class: 'gjs-fonts gjs-f-h1p'},
        content: `<section class="bdg-sect">
      <h1 class="heading">Insert title here</h1>
      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiumdod tempor incididunt ut labore et dolore magna aliqua</p>
      </section>`
    });

    toAdd('divider') && bm.add('divider', {
        category: 'Basic',
        label: 'Divider',
        attributes: {class: 'gjs-fonts gjs-f-divider'},
        content: `<hr />`
    });

    /*Columns*/
    //blocks: ['1column', '2column','3column','4column'],
    toAdd('1column') && bm.add('1column', {
        category: 'Containers',
        label: '1 Column',
        attributes: {class:'gjs-fonts gjs-f-b1'},
        content: `<div class="spl-container"><div class="spl-row spl-row-md"><div class="spl-col-md-12"></div></div></div>`
    });
    toAdd('2column') && bm.add('2column', {
        category: 'Containers',
        label: '2 Columns',
        attributes: {class: "gjs-fonts gjs-f-b2"},
        content: `<div class="spl-container"><div class="spl-row spl-row-md"><div class="spl-col-md-6"></div><div class="spl-col-md-6"></div></div></div>`
    });
    toAdd('3column') && bm.add('3column', {
        category: 'Containers',
        label: '3 Columns',
        attributes: {class: "gjs-fonts gjs-f-b3"},
        content: `<div class="spl-container"><div class="spl-row spl-row-md"><div class="spl-col-md-4"></div><div class="spl-col-md-4"></div><div class="spl-col-md-4"></div></div></div>`
    });
}
