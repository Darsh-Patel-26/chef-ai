import {useState} from 'react'

import Form from './Form'
import Ingredients from './Ingredients'
import Recipe from './Recipe'

import {getRecipeAI} from '../ai'

export default function Main() {
    const [list, setIngList] = useState([])

    const [recipe, setRecipe] = useState("")

    const ingList = list.map(ing => <li>{ing}</li>)

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const ing = formData.get('ingredient')
        setIngList(prevIngList => [...prevIngList, ing])
        
    }

    async function getRecipe() {
        const recipeMarkdown = await getRecipeAI(list)
        setRecipe(recipeMarkdown)
    }

    return (
        <main>
            <Form handleSubmit={handleSubmit} />
            <Ingredients ingList={ingList} getRecipe={getRecipe}/>
            <Recipe recipe={recipe}/>
        </main>
    )
}