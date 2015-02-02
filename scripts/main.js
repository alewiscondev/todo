require.config({
    baseUrl:'/scripts',

    paths: {
        'Item' : 'Item',
        'ItemList' : 'ItemList',
        'ItemView' : 'ItemView',
        'underscore': 'underscore',
        'backbone' : 'backbone',
        'backbone-localStorage' : 'backbone.localStorage',
        'handlebars': 'handlebars'
    }
});

require(['AppView', 'jquery'], function(AppView, $) {
    $(function() {
        var App = new AppView();
    });
});