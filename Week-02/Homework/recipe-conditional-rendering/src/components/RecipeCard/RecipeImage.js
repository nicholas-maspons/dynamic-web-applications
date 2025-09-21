import styles from './RecipeCard.module.css'

function RecipeImage(props) {
    
    const {image} = props
    
    return (<img src={image} alt="pancake" className={styles.recipe_image}/>)
}

export default RecipeImage;
