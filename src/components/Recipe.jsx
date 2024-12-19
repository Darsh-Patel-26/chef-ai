import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Recipe(props) {
    return (
        props.recipe && <section className='recipe' aria-live='polite'>
            <h2>AI recommends:</h2>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{props.recipe}</ReactMarkdown>
        </section>
    )
}