define([
    'ItemView',
    'Item'
], function(
    ItemView,
    Item
){
    describe(
        'The ItemView',
        function() {
            var item;
            var iview;
            var el;

            beforeEach(function() {
                item= new Item();
                el = document.createElement('div');
                document.body.appendChild(el);
                iview = new ItemView({el: el, model: item});
            });

            afterEach(function() {
                item.destroy();
                iview.remove();
            });

            it(
                'should re-render when the model changes',
                function() {
                    item.set({'done': true});
                    var elem = iview.$el.html();
                    expect(elem.indexOf('checked="checked"')).toBe(69);
                }
            );

            it(
                'should remove the view if the model is destroyed',
                function() {
                    spyOn(iview.$el, 'remove');
                    item.trigger('destroy', item);
                    expect(iview.$el.remove).toHaveBeenCalled();
                }
            );

            it(
                'should toggle the model on click of the toggle',
                function() {
                    spyOn(item, 'toggle');
                    iview.render();
                    iview.$('.toggle').click();
                    expect(item.toggle).toHaveBeenCalled();
                }
            );

            it(
                'should be editable',
                function() {
                    iview.render();
                    iview.$('.view').dblclick();
                    var focused = document.activeElement;
                    expect(iview.el.classList.toString()).toContain('editing');
                    expect(focused.className).toBe('edit');
                }
            );

            it(
                'should close edit upon pressing enter key',
                function() {
                    iview.render();
                    spyOn(iview, 'close');
                    iview.$('.view').dblclick();
                    var e = $.Event('keypress');
                    e.keyCode = 13;
                    iview.$('.edit').trigger(e);
                    expect(iview.close).toHaveBeenCalled();
                }

            );

            it(
                'should close edit upon blur',
                function() {
                    iview.render();
                    spyOn(item, 'save');
                    iview.$('.view').dblclick();
                    iview.$('.edit').trigger('blur');
                    expect(item.save).toHaveBeenCalled();
                    expect(iview.el.classList.toString()).not.toContain('editing');

                }
            );

            it(
                'should be destroyed upon clicking the destroy button',
                function() {
                    iview.render();
                    spyOn(item, 'destroy');
                    iview.$('a.destroy').click();
                    expect(item.destroy).toHaveBeenCalled();
                }
            );

            it(
                'should delete the item if close occurs with no value in the input box',
                function() {
                    iview.render();
                    spyOn(item, 'destroy');
                    iview.$('.view').dblclick();
                    var e = $.Event('keypress');
                    e.keyCode = 13;
                    iview.$('.edit').val('');
                    iview.$('.edit').trigger(e);
                    expect(item.destroy).toHaveBeenCalled();
                }
            );

            it(
                'should save the value of the input box if edit is closed with any input',
                function() {
                    iview.render();
                    var inputValTest;
                    spyOn(item, 'save').and.callFake(function() {
                        inputValTest = iview.$('.edit').val();
                    });
                    iview.$('.view').dblclick();
                    var e = $.Event('keypress');
                    e.keyCode = 13;
                    iview.$('.edit').val('foo');
                    iview.$('.edit').trigger(e);
                    expect(item.save).toHaveBeenCalled();
                    expect(iview.el.classList.toString()).not.toContain('editing');
                    expect(inputValTest).toBe('foo');
                }
            );

            it(
                'should toggle done class to match the done attribute of the item',
                function() {
                    var item2 = new Item({'title': 'bar', 'done': true});
                    var iview2 = new ItemView({model: item2});
                    iview.render();
                    iview2.render();
                    expect(iview.el.classList.toString()).not.toContain('done');
                    expect(iview2.el.classList.toString()).toContain('done');
                }
            )

        }
    )
})