import RecipeCard from './components/RecipeCard'
import IngredientList from './components/RecipeCard/IngredientList'
import InstructionList from './components/RecipeCard/InstructionList'
import RecipeImage from './components/RecipeCard/RecipeImage'
import RecipeInfo from './components/RecipeCard/RecipeInfo'

import {RECIPE} from './components/RecipeCard/recipe-data'

import './App.css'

/*
Note: I do it like this just to show an example of props.children being used in components/RecipeCard/index.js, 
which results in RecipeCard.js being basically empty, unlike Week-01's version of RecipeCard/index.js.
So I can compare Week-01's App.js & components/RecipeCard/index.js to this (Week-02's) App.js & components/RecipeCard/index.js.
Then I can decide what approach I like.

<Card><div>Look at me I am a child text node of the card component</div></Card>
*/

function App() {
    return (
        <RecipeCard>
            <RecipeImage image={RECIPE.imgSrc}/>
            <div className="card_text">
                <RecipeInfo title={RECIPE.title} description={RECIPE.description}/>
                <div className="card_list">
                    <IngredientList data={RECIPE.ingredients}/>
                    <InstructionList data={RECIPE.instructions}/>
                </div>
            </div>
        </RecipeCard>
    )
}

export default App;
