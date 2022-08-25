import React, {useState, useEffect} from "react";
import "./MediaContainer.css";

const API_KEY="1b3bbfd5c81da1fb2df8b1f9f0066007";
const PREFIX_IMAGES_PATH="https://image.tmdb.org/t/p/w500";

const MediaContainer = ({typeOfMedia, title}) => {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/${typeOfMedia}/popular?api_key=${API_KEY}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (typeOfMedia === "movie") {
                    data = data.results.map(field => {
                        return {"imagePath": field.poster_path, "title": field.title, "releaseDate": field.release_date};
                    })
                }
                else {
                    data = data.results.map(field => ({"imagePath": field.poster_path, "title": field.name, "releaseDate": field.first_air_date}));
                }
                setMedia(data);
                })
            .catch(error => console.log("Error :", error));
    })

    return (
        <>
            <h1>{title}</h1>
            <ul className="mediaList">
                {media.map(element => {
                    return <li>
                        <div className="mediaContainer">
                            <img src={PREFIX_IMAGES_PATH+element.imagePath} alt={element.title} />
                            <div className="mediaInfoContainer">
                                <h3>{element.title}</h3>
                                <p>{element.releaseDate}</p>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </>
    )
}

export default MediaContainer;