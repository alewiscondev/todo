define([
    '../../js/models/Item'
], function(
    Item
) {
    describe(
        "The Item contains a single title and status of a todo list",
        function() {
            var item = new Item();
debugger;
            it(
                "should have the default title \'Name\'",
                function() {
                    expect(item.get('title')).toBe('Name');
                }
            );
        }
    );
});