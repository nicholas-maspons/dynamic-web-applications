import styles from './RecipeCard.module.css'

function InstructionList(props) {
    const {data} = props;

    return (
        <div className={styles.instruction_list}>
            <h3 className={styles.list_title}>Instructions</h3>
            <ol>
                {data.map((instruction) => {
                    return <li className={styles.list_item}>{instruction}</li>
                })}
            </ol>
        </div>
    )
}

export default InstructionList;
