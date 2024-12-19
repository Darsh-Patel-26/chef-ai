export default function Ingredients(props) {
    return (
        props.ingList.length > 0 ?
            <section>
                <h2>Ingrediets on hand:</h2>
                <ul className="ingredients-list">{props.ingList}</ul>
                {props.ingList.length >= 3 && <div className="get-r-cont">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>}
            </section> 
        : null
    )
}