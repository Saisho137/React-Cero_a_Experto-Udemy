import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
    const handleClick = (event) => {
        console.log(event)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
            <button onClick={ handleClick }> +1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

export default CounterApp;