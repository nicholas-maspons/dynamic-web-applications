### Week 05 Notes

- Routes
    - npm i react-router-dom
    - BroswerRouter
        - Import in index.js
        - Do this: <BrowserRouter><App/></BrowserRouter>
    - NavLink  
      - NavLink is just Link with the extra feature of automatically providing an object with the 'isActive' and 'isPending' keys for functions passed to the className property, allowing for additional styling based on if the NavLink is the currently visited URL.
      - [Docs](https://reactrouter.com/api/components/NavLink)
      - NavLink's 'to' property needs a Route with a matching 'path' property.

- useRef
    - Allows us to watch a specific element by associatiing it with variable
    - .current propery is what we use with refs

- useEffect
    - Named export that takes two arguments (except for one case)
        - The function you want to call
        - An array of dependencies that will be watched
            - Specifically: state variables, props, any JS variables whose change causes a rerender either directly or as a result of a parent rerender
    - Cases:
        - useEffect(() => {})
            - Runs on mount (initial render) and after every rerender 
        - useEffect(() => {}, []) 
            - Runs only on mount
            - Great for API calls or adding event listeners manually
        - useEffect(() => {}, [someVar, anotherVar, etc.])
            - FRuns on mount and everytime the value of a variable in the array changes
    - The function passed as the first argument executes whenever one of these cases occur.
    - If we added an event listener without useEffect, it will add an event listener EVERY time the component re-renders
    - If we don't use a cleanup function, this event listener will hang around after our dropdown is no longer on the page and cause issues
    - The returned function inside useEffect's first argument is executed whenever the component is destroyed, serving as a cleanup function

- API
    - Keywords 'async' and 'await' will be needed when working with API calls
    - Response status codes:
        - 200: Good
        - 400: Bad
        - 300: Ehhhh    
    - API credentials should be stored in, then imported from a .env file
