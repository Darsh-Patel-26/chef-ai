export default function Form(props) {
    return (
        <form className="app-form" onSubmit={props.handleSubmit}>
            <input 
                type="text" 
                placeholder="eg. milk" 
                aria-label="Add Ingredient"
                name="ingredient"
            />
            <button>Add Ingredient</button>
        </form>
    )
}