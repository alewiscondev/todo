define([
    'backbone',
    'ItemList',
    'ItemView',
    'Item',
    'underscore'
], function(
    Backbone,
    ItemList,
    ItemView,
    Item,
    _
) {
    var AppView = Backbone.View.extend({

        el: "#todoapp",

        events: {
            "keypress #new-todo": "createOnEnter"
        },

        initialize: function() {

            this.input = this.$("#new-todo");

            this.collection = new ItemList();

            this.listenTo(this.collection, 'add', this.addOne);
            this.listenTo(this.collection, 'reset', this.addAll);
            this.listenTo(this.collection, 'change', this.addAll);
            this.listenTo(this.collection, 'all', this.render);

            this.incomplete = this.$('incomplete');

            this.collection.fetch();
        },

        render: function() {
            if (this.collection.length) {
                this.incomplete.show();
            }
            else {
                this.incomplete.hide();
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
        }
    });

    return AppView;
})