define([
    'jquery',
    'backbone',
    'Item',
    'handlebars'
], function(
    $,
    Backbone,
    Item,
    Handlebars
) {

    var ItemView = Backbone.View.extend({

        tagName: "li",

        template: Handlebars.compile($('#item-template').html()),

        events: {
            'click .toggle': "toggleDone"
        },

        initialize: function() {
            this.listenTo(this.model, "change", this.render);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.toggleClass('done', this.model.get("done"));
            return this;
        },

        toggleDone: function() {
            this.model.toggle();
        }
    });

    return ItemView;
})




