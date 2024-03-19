
//This object will be written to memory only once.
const object = {
    name: 'Santiago',
    lastName: 'Betancur'
};

const App = () => {
    //Put your data, objects or methods here if depends on component state/operations.
    //This functions will be written to memory after each re render.
    const printHelloWorld = () => 'Hello world!';

    return (
        <>
            <h1>{`${object.name} ${object.lastName}`}</h1>
            <h2>{printHelloWorld()}</h2>
            <p>Description</p>
        </>
    )
}

export default App;