import useFetch from "../hooks/useFetch"


const MultipleCustomHooks = () => {
    const { data, hasError, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/4');

    return (
        <>
            <h1>Pokemons:</h1>
            <hr />

            {isLoading && <p>Cargando ...</p>}
            <h2>{data?.name}</h2>
        </>
    )
}

export default MultipleCustomHooks
