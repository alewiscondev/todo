define([
    'backbone'
], function (
    Backbone
) {
    var Item = Backbone.Model.extend({

        defaults: {
            title: "Name",
            done: false

        },

        toggle: function() {
            this.set('done', !this.get('done'));
            this.save();
        }
    });

    return Item;
})
