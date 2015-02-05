require.config({

    paths: {
        'jasmine': '../js/lib/jasmine-2.0.0/jasmine',
        'jasmine-html': '../js/lib/jasmine-2.0.0/jasmine-html',
        'boot': '../js/lib/jasmine-2.0.0/boot',
        'backbone' : '../js/lib/backbone',
        'underscore': '../js/lib/underscore',
        'jquery': '../js/lib/jquery',
        'Item' : '../js/models/Item',
        'jasmine-blanket': '../js/lib/jasmine-blanket',
        'blanket': '../js/lib/blanket',
        'Item' : '../js/models/Item'
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

// http://adamish.com/blog/archives/806
// http://alex-seville.github.io/blanket/test/jasmine/SpecRunner_data_adapter.html

//require(['boot', 'jasmine-blanket'], function () {
//
//    // Load the specs
//    require(specs, function () {
//
//        // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
//        window.onload();
//    });
//});

require(['boot', 'jasmine-blanket', 'jquery' ], function(jasmine, blanket, $) {
    debugger;
    blanket.options('filter', 'js/');
    blanket.options('antifilter', ['js/models/', 'test/spec/']);
    blanket.options('branchTracking', true);
    var specs = [
        'specs/ItemSpec'
    ];

    $(document).ready(function() {
        require(specs, function () {
            window.onload();
        });
        var specs = [
            'specs/ItemSpec'
        ];

        require(['boot'], function () {

            // Load the specs
            require(specs, function () {
                // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
                window.onload();
            });
        });
    });
});