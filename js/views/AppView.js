define([
    '../lib/underscore',
    'backbone',
    '../collections/ItemList',
    '../views/ItemView',
    '../models/Item',
    '../lib/handlebars'
], function(
    _,
    Backbone,
    ItemList,
    ItemView,
    Item,
    Handlebars
) {
    var AppView = Backbone.View.extend({

        el: "#todoapp",

        statsTemplate: Handlebars.compile($('#stats-template').html()),

        events: {
            "keypress #new-todo": "createOnEnter",
            "click #clear-completed": "clearCompleted",
            "click #toggle-all": "toggleAllComplete"
        },

        initialize: function() {

            this.input = this.$("#new-todo");
            this.toggleAll = this.$("#toggle-all");

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
                this.toggleAll.show();
                this.footer.show();
                this.footer.html(this.statsTemplate({'done': done, 'remaining': remaining, 'plural': this.collection.plural()}));
            }
            else {
                this.incomplete.hide();
                this.footer.hide();
                this.toggleAll.hide();
            }
            //if (this.collection.each(function(item){
            //        if (!item.get('done')) {
            //            return true;
            //        }
            //    })
            //) {
            //    this.toggleAll.find('input').checked = false;
            //}
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
            _.invoke(this.collection.done(), 'destroy');
        },

        toggleAllComplete: function() {
            this.collection.each(function(item) {
                if (!item.get('done')) {
                    item.save({'done': true})
                }})
        }
    });

    return AppView;
})