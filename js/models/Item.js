define([
    'backbone'
], function (
    Backbone
) {
    var Item = Backbone.Model.extend({

        defaults: function() {
            return {
                title: "Name",
                done: false
            };
        },

        initialize: function() {
            if (!this.get("title")) {
                this.set({"title": this.defaults().title});
            }
        },

        toggle: function() {
            this.save({done: !this.get("done")});
        }
    });

    return Item;
})
