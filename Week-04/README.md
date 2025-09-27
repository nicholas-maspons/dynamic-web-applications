value? explain it

The dropdown-component file can very easily be adjusted to get the same visual effect without using the parent's state. However, dropdowns are typically used as part of a form, and i need to bring that data out of the dropdown component to actually do something with it. I won't even show that version since it's not very practical in a real world scenario, but if future me want sto see it anyway, it only takes a minute to make the needed changes

For the version i pushed:
a value is passed down by the parent, then the child passes back the updated value back, causing the parent to rerender. which is again passed back to the child, which changes the "Select" to whatever was chosen




the dropdown i have alone does not feature the filtering of teams. also it doesnt have the addition of color to the bg. so thats how the dropdown is diff. button is the same. accordion has more complexity ig.

the dropdown in compoents pages, uses the value passed back by the child to update the bg color of the parent. 

The accordion in compnents pages has more items, and collapses the previously opened item when opening a new one