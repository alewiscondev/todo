define([
    'ItemList',
    'Item',
    'backbone'
], function(
    ItemList,
    Item
) {
    describe(
        "The ItemList should store items",
        function() {
            var item1;
            var item2;
            var item3;
            var list;

            beforeEach(function() {
                item1 = new Item({'title': 'a', 'done': true});
                item2 = new Item({'title': 'b', 'done': false});
                item3 = new Item({'title': 'c', 'done': true});
                list = new ItemList([item1, item2, item3]);
            })

            it(
                "should return an array of completed only",
                function() {
                    var completed = list.done();
                    expect(completed.length).toBe(2);
                    expect(completed[0].get('title')).toBe('a');
                    expect(completed[1].get('title')).toBe('c');
                }
            );

            it(
                "should return an array of remaining only",
                function() {
                    var completed = list.remaining();
                    expect(completed.length).toBe(1);
                    expect(completed[0].get('title')).toBe('b');
                }
            );

            it(
                "should contain a valid list of items",
                function() {
                    expect(list.at(0).get('title')).toBe('a');
                    expect(list.at(1).get('title')).toBe('b');
                    expect(list.at(2).get('title')).toBe('c');
                    expect(list.length).toBe(3);
                }
            )
        }
    );
});