define([
    '../../js/models/Item'
], function(
    Item
) {
    describe(
        "The Item contains a single title and status of a todo list",
        function() {
            var item;
debugger;
            beforeEach(function() {
                item = new Item();
                spyOn(item, 'save');
            })

            it(
                "should have the default title \'Name\'",
                function() {
                    expect(item.get('title')).toBe('Name');
                }
            );

            it(
                "should have be set to incomplete by default",
                function() {
                    expect(item.get('done')).toBe(false);
                }
            );

            it(
                "should switch to complete upon toggle",
                function() {
                    item.toggle();
                    expect(item.get('done')).toBe(true);
                    expect(item.save).toHaveBeenCalled();
                }
            )
        }
    );
});