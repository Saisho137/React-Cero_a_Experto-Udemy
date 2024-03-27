import PropTypes from "prop-types";

const GifItem = ({ title, url, id }) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <h4>{title}</h4>
        </div>
    )
}

GifItem.PropTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default GifItem;