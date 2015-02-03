define([
    '../lib/underscore',
    'backbone',
    '../models/Item',
    '../lib/backbone.localStorage'
], function(
    _,
    Backbone,
    Item
) {
    var itemList = Backbone.Collection.extend({

        model: Item,

        // todos-backbone is the namespace
        localStorage: new Backbone.LocalStorage("todos"),

        done: function() {
            return this.where({done: true});
        },

        remaining: function() {
            return this.where({done: false});
        }
    });

    return itemList;
});
