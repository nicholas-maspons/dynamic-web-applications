// index.js is the main export of the RecipeCard component folder

import './styles.scss'
import IngredientList from './IngredientList'
import InstructionList from './InstructionList'

// 1. Import image directly
// If I chose this import approach, I would use the commented out <img/> tag instead
// import buttermilkPancakesImage from '../../assets/buttermilk-pancakes.jpg'

// 2. Include image through the imported data object
import buttermilkPancakesData from './recipe-data'  // I am not required to name this RECIPE even though that is the variable name in recipe-date.js since I use export default

function RecipeCard() {
    return (
        <div className='recipe-card'>
            {/* <img src={ buttermilkPancakesImage} alt='buttermilk pancakes' className='recipe-img'/> */}
            <img src={buttermilkPancakesData.imgSrc} alt='buttermilk pancakes' className='recipe-img'/>

            <IngredientList ingredients={buttermilkPancakesData.ingredients} title="Ingredients"/>
            <InstructionList instructions={buttermilkPancakesData.instructions} title="Instructions"/>
        </div>
    )
}

export default RecipeCard;
