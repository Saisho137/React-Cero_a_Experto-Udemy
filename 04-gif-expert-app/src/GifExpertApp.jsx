import { useState } from "react"

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Hola', 'Mundo']);

    const onAddCategory = () => {
        setCategories([...categories, 'Nueva categoria']);
    }

    return (
        <>
            <h1>Gif Expert App</h1>
            <button onClick={onAddCategory}>Agregar Categoria</button>
            <ol>
                {categories.map(category => (
                    <li key={category}>{category}</li>
                ))}
            </ol>
        </>
    )
}

export default GifExpertApp
