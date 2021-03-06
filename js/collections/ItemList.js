define([
    'underscore',
    'backbone',
    'Item',
    'backbone-localStorage'
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
        },

        plural: function() {
            if (this.done().length > 1) {
                return true;
            }
            return false;
        }
    });

    return itemList;
});
