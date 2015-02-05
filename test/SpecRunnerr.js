require.config({

    paths: {
        'jasmine': '../js/lib/jasmine-2.0.0/jasmine',
        'jasmine-html': '../js/lib/jasmine-2.0.0/jasmine-html',
        'boot': '../js/lib/jasmine-2.0.0/boot',
        'backbone' : '../js/lib/backbone',
        'underscore': '../js/lib/underscore',
        'jquery': '../js/lib/jquery',
        'Item' : '../js/models/Item',
        'blanket': '../js/lib/blanket',
        'jasmine-blanket': '../js/lib/jasmine-blanket'
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
        },
        'jasmine-blanket' : {
            deps : [ 'boot', 'blanket' ],
            exports : 'blanket'
        }
    }
});

var specs = [
    'specs/ItemSpec'
];

require(['boot', 'blanket', 'jasmine-blanket'], function () {

    // Load the specs
    require(specs, function () {
        // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
        window.onload();
    });
});

