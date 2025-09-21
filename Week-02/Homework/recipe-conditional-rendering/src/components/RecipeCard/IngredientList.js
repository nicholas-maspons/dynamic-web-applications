import styles from './RecipeCard.module.css'

function IngredientList(props) {
    const {data} = props;

    return (
        <div className={styles.ingredient_list}>
            <h3 className={styles.list_title}>Ingredients</h3>
            <ul>
                {data.map((ingredient) => {
                    return <li className={styles.list_item}>{ingredient}</li>
                })}
            </ul>
        </div>
    )
}

export default IngredientList;
