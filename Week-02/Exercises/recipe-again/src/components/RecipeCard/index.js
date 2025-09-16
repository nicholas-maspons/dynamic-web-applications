import styles from './RecipeCard.module.css'

function RecipeCard(props) {
    // children is a built in prop
    const {children} = props
    
    return (<div className={styles.recipe_card}>{children}</div>)
}

export default RecipeCard;
