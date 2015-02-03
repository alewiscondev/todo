define([
    'backbone',
    '../collections/ItemList',
    '../views/ItemView',
    '../models/Item',
    '../lib/underscore',
    '../lib/handlebars'
], function(
    Backbone,
    ItemList,
    ItemView,
    Item,
    _,
    Handlebars
) {
    var AppView = Backbone.View.extend({

        el: "#todoapp",

        statsTemplate: Handlebars.compile($('#stats-template').html()),

        events: {
            "keypress #new-todo": "createOnEnter",
            "click #clear-completed": "clearCompleted"
        },

        initialize: function() {

            this.input = this.$("#new-todo");

            this.collection = new ItemList();

            this.listenTo(this.collection, 'add', this.addOne);
            this.listenTo(this.collection, 'reset', this.addAll);

            // lookup documentation, may be able to re-render all items
            this.listenTo(this.collection, 'change:done', this.addAll);

            this.listenTo(this.collection, 'all', this.render);

            this.incomplete = this.$('incomplete');

            this.footer = this.$('footer');

            this.collection.fetch();
        },

        render: function() {

            var done = this.collection.done().length;
            var remaining = this.collection.remaining().length;

            if (this.collection.length) {
                this.incomplete.show();
                this.footer.show();
                this.footer.html(this.statsTemplate({'done': done, 'remaining': remaining}));
            }
            else {
                this.incomplete.hide();
                this.footer.hide();
            }
        },

        addOne: function(todo) {
            var view = new ItemView({model: todo});
            if(todo.get('done')) {
                this.$("#todo-list-complete").append(view.render().el);
            }
            else {
                this.$("#todo-list-incomplete").append(view.render().el);
            }
        },

        addAll: function() {

            this.$("#todo-list-complete").empty();
            this.$("#todo-list-incomplete").empty();

            this.collection.each(this.addOne, this);
        },

        createOnEnter: function(e) {
            if (e.keyCode != 13) return;
            if (!this.input.val()) return;

            this.collection.create({title: this.input.val()});
            this.input.val('');
        },

        clearCompleted: function() {
            Handlebars.invoke(this.collection.done(), 'destroy');
            return false;
        }
    });

    return AppView;
})