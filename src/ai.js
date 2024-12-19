import {HfInference} from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assitant that recieves a list of ingredients that a user has and suggests a recipe they could make with some or all of the ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`
const api = import.meta.env.VITE_API_KEY
const hf = new HfInference(api)

export async function getRecipeAI(ingredientsArr) {
    const ingredients = ingredientsArr.join(', ')
    try {
        const response = await hf.chatCompletion({
            model: 'mistralai/Mistral-7B-Instruct-v0.3',
            messages: [
                {role: 'system', content: SYSTEM_PROMPT},
                {role: "user", content: `I have ${ingredients}. Please give me a recipe you'd recommend I make!`}
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (error) {
        console.log(error.message)
    }
}