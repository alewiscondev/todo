define([
    'backbone',
    'handlebars',
    'jquery',
    'text!ItemTemplate'
], function(
    Backbone,
    Handlebars,
    $,
    ItemTemplate
) {

    var ItemView = Backbone.View.extend({

        tagName: "li",

        template: Handlebars.compile(ItemTemplate),

        events: {
            'click .toggle': 'toggleDone',
            'dblclick .view': 'edit',
            'keypress .edit' : 'updateOnEnter',
            'blur .edit' : 'close',
            'click a.destroy': 'clear'
        },

        initialize: function() {
            this.listenTo(this.model, "change", this.render);
            this.listenTo(this.model, "destroy", this.remove);

        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.toggleClass('done', this.model.get("done"));
            this.input = this.$(".edit");
            return this;
        },

        toggleDone: function() {
            this.model.toggle();
        },

        edit: function() {
            this.$el.addClass('editing');
            this.input.focus();
        },

        updateOnEnter : function(e){
            if (e.keyCode == 13) {
                this.close();
            }
        },

        close: function() {
            var value = this.input.val();
            if (!value) {
                this.clear();
            }
            else {
                this.model.save({title: value});
                this.$el.removeClass('editing');
            }
        },

        clear: function() {
            this.model.destroy();
        }
    });

    return ItemView;
})




