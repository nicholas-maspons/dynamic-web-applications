### Week 04 Notes

- Dropdown Component Notes
    - The dropdown-component file can very easily be adjusted to get the same visual effect without using the parent's state. However, dropdowns are typically used as part of a form, and I need to get its input data out from the dropdown component and back into the parent to actually do something with it. I won't even show that version since it's not very practical in a real world scenario, but if future me wants to see it anyway, it only takes a minute to make the needed changes (Don't waste your time on this Nicholas...)
    - How it works: a value is passed down by the parent, then the child passes back the updated value back, causing the parent to rerender. which is again passed back to the child, which changes the "Select" to whatever value was chosen.

- Extra
    - The dropdown in dropdown-component is less complex than that in the pages project, as it does not include the filtering of teams.
    - The accordion in pages is more complex than the one in Week-03, as this one supports multiple items.
    - obj?.key checks if object exists first, then accesses the field. An error happens if you try object.key when object is null or some other "non existent" thing.
