import React from 'react';
import darkKnight from '../assets/dark-knight.jpg';
import matrix from '../assets/matrix.jpg';
import fightClub from "../assets/fight-club.jpg";
import lordOfTheRings from "../assets/lord-of-the-rings.jpg";
import nachoLibre from "../assets/nacho-libre.jpg";
import godfather from "../assets/godfather.jpg";
import pulpFiction from "../assets/pulp-fiction.jpg";


const Movie = (props) => {

    let image ="";

    switch(props.name) {
        case "Dark Knight":
            image = darkKnight;
            break;
        case "Matrix":
            image = matrix;
            break;
        case "Fight Club":
            image = fightClub;
            break;
        case "Lord of the Rings":
            image = lordOfTheRings;
            break;
        case "Nacho Libre":
            image = nachoLibre;
            break;
        case "Godfather":
            image = godfather;
            break;
        case "Pulp Fiction":
            image = pulpFiction;
            break;
        default:
            image = "";
            
    }

    let cover = {
        backgroundImage: 'url(' + image + ')'
    }
    console.log("The value of image is ", image);
    return (
        <div className="movie-container">
            <div className="movie-image" style={cover}></div>
            <p className="movie-title">{props.name}</p>
            <p className="movie-year">{props.year}</p>
        </div>
    );


}

export default Movie;