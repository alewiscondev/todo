define([
    'model/Item',
], function(
    Item
) {
    describe(
        "The Item contains a single title and status of a todo list",
        function() {
            var item = new Item();

            it(
                "should have the default title \'Name\'",
                function() {
                    expect(item.title.toBe('Name'));
                }
            );
        }
    );
});