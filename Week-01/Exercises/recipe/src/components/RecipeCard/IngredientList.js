function IngredientList(props) {
    // const props = {
    //     ingredients: [],
    //     title: "Ingredients"
    // }
    const {ingredients, title} = props;  // destructuring (I am extracting each property from the props object and making them their own variable)

    // destructuring is shorthand for:
    // const ingredients = props.ingredients;
    // const title = props.title

    return (
        <div className="list">
            <h2>{title}</h2>
            <ul>
                {ingredients.map((ingredient) => {return <li>{ingredient}</li>})}
            </ul>
        </div>
    )


}

export default IngredientList;
