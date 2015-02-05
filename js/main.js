require.config({

    // basePath: ".",

    paths: {
        'backbone' : 'lib/backbone',
        'underscore': 'lib/underscore',
        'backbone-localStorage' : 'lib/backbone.localStorage.js',
        'handlebars': 'lib/handlebars',
        'jquery': 'lib/jquery'

        //'Item' : 'models/Item',
        //'ItemList' : 'collections/ItemList',
        //'ItemView' : 'views/ItemView',
    },

    shim: {
        'lib/jquery': {
            exports: '$'
        },
        'lib/underscore': {
            exports: '_'
        },
        'lib/backbone': {
            deps: ['lib/underscore', 'lib/jquery'],
            exports: 'Backbone'
        }
    }
});

require(['views/AppView', 'jquery'], function(AppView, $) {
    $(function() {
        var App = new AppView();
    });
});