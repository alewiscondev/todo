require.config({


    paths: {
        'jasmine': '../js/lib/jasmine-2.0.0/jasmine',
        'jasmine-html': '../js/lib/jasmine-2.0.0/jasmine-html',
        'boot': '../js/lib/jasmine-2.0.0/boot',
        'backbone' : '../js/lib/backbone',
        'backbone-localStorage' : '../js/lib/backbone.localStorage',
        'underscore': '../js/lib/underscore',
        'jquery': '../js/lib/jquery',
        'Item' : '../js/models/Item',
        'ItemList' : '../js/collections/ItemList',
        'ItemView' : '../js/views/ItemView',
        'handlebars': '../js/lib/handlebars',
        'text': '../js/lib/text',
        'ItemTemplate' : '../templates/ItemTemplate.hbs'
    },
    shim: {
        'jasmine': {
            exports: 'window.jasmineRequire'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'window.jasmineRequire'
        },
        'boot': {
            deps: ['jasmine', 'jasmine-html'],
            exports: 'window.jasmineRequire'
        }
    }
});

var specs = [];

specs.push('specs/ItemSpec');
specs.push('specs/ItemListSpec');
specs.push('specs/ItemViewSpec');



require(['boot'], function () {

    // Load the specs
    require(specs, function () {
        // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
        window.onload();
    });
});


