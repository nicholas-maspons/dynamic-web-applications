How this project works:
This is all set up dynamically, meaning I can scale it to be larger easily. Maybe I was doing too much. Context is used between App and SettingsPage + HoemPage. Then prop drilling occurs from SettingsPage all the way down to the Component (either Toggle or Input [I only have Toggle right now]) to connect the state in this one Component inside settings all the way to the App, which needs to know about this change because it changes how everything looks. Toggle.js receives some function. You don't know what it is and it's up to the developer to decide what the functionality is. This is limited to a true/false functionality of course. So even though I am using the same exact component, they can serve different functions. Each Section has an array of Items within it, which is why I pass an array into Section, then map through it in there to make each Item. I'm still deciding if I wil dynamically create the sections variable in SettingsPage.js. That might be a bit extra. As for the HomePage, I use absolute and relative on two divs to make them stack and give the appearance of a circular progress bar. There isn't much to see but it's on the inside that matters. Also I use NavLink to make use of its built in isActive property to underline the page the user is on.

What I typed in terminal:
- npm i sass
- npm i react-router-dom

https://docs.google.com/presentation/d/1eoS0zDkdriYUOUoHYyBK-QznRsqahgjR1nvUFeIxtfk/edit?usp=sharing

