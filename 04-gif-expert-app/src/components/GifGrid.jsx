import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"
import GitItem from "./GitItem";

const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category).then(img => {
            setImages(img);
        });
    }, [])

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map(image => (
                    <GitItem key={image.id} {...image} />
                ))}
            </div>
        </>
    )
}

export default GifGrid
