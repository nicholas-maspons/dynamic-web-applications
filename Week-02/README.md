### Week 02 Notes

- CSS Modules
    - Helps prevent class name conflicts (helpful for generic class names)
        - Ex: I can use the .error class in 6 different places and have it mean/do 6 different things
    - Classes used in module.css files get hashed to prevent conflicts across component class names, as seen through inspection
    - To use CSS module, I must change the stylesheet file extension from {title}.css to {title}.module.css
        - Ex: import styles from './RecipeCard.module.css' then className={styles.recipe_card}
    - Class names (selectors) and element selectors are scoped to just the files using them

- useState
    - Takes one argument (the initial value)
    - Returns an array that always has only two items that I extract via destructuring
        - A piece of state that React keeps record of (Ex: count)
        - A function for me to use to update count (Ex: setCount)
    - Never directly mutate state
        - Bad: count = count + 1
        - Good: setCount(count + 1)
    - The component (not the page) updates/rerenders when its state changes due to user input

- Extra
    - Never use absolute paths in code as it can break when deploying or sharing your project on internet
    - When I install a package with npm, the dependencies in package.json get updated automatically
    - To use icons with CRA:
        - https://github.com/marella/material-design-icons/tree/main/svg
        - npm install @material-design-icons/svg@latest
        - import { ReactComponent as Face } from '@material-design-icons/svg/filled/face.svg';        
