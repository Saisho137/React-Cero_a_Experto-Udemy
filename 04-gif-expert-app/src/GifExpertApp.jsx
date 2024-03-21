import { useState } from "react"
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Hola', 'Mundo']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);
        /* setCategories( (actualState) => [...actualState, newCategory]);*/ //Otro método!
    }

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory
                /* setCategories={setCategories}  */
                onNewCategory={(event) => onAddCategory(event)}
            />
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
