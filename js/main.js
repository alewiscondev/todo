require.config({

    paths: {
        'backbone' : 'lib/backbone',
        'underscore': 'lib/underscore',
        'backbone-localStorage' : 'lib/backbone.localStorage',
        'handlebars': 'lib/handlebars',
        'jquery': 'lib/jquery',
        'Item': 'models/Item',
        'ItemList': 'collections/ItemList',
        'ItemView': 'views/ItemView',
        'AppView': 'views/AppView'
    }
});

require(['AppView', 'jquery'], function(AppView, $) {
    $(function() {
        var App = new AppView();
    });
});