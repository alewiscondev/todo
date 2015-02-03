require.config({

    paths: {
        'underscore': 'lib/underscore',
        'backbone' : 'lib/backbone',
        'backbone-localStorage' : 'lib/backbone.localStorage.js',
        'handlebars': 'lib/handlebars',
        'jquery': 'lib/jquery'

        //'Item' : 'models/Item',
        //'ItemList' : 'collections/ItemList',
        //'ItemView' : 'views/ItemView',
    }
});

require(['views/AppView', 'jquery'], function(AppView, $) {
    $(function() {
        var App = new AppView();
    });
});