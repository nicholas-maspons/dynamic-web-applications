import styles from './RecipeCard.module.css'

function RecipeInfo(props) {
    const {title, description} = props;

    return (
        <div className={styles.recipe_info}>
            <h2 className={styles.recipe_title}>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default RecipeInfo;
