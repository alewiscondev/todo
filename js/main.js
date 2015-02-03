require.config({

    //waitSeconds: 0,

    paths: {
        'Item' : 'models/Item',
        'ItemList' : 'collections/ItemList',
        'ItemView' : 'views/ItemView',
        'underscore': 'lib/underscore',
        'backbone' : 'lib/backbone',
        'backbone-localStorage' : 'lib/backbone.localStorage.js',
        'handlebars': 'lib/handlebars',
        'jquery': 'lib/jquery'
    }
});

require(['views/AppView', 'jquery'], function(AppView, $) {
    $(function() {
        var App = new AppView();
    });
});