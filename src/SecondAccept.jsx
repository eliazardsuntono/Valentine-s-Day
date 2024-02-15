import Happy from './assets/happy.jpeg';
import React, { useState } from 'react';
import MovieTheater from './places/MovieTheater.jsx';
import Arcade from './places/Arcade.jsx';
import Park from './places/Park.jsx';
import Cafe from './places/Cafe.jsx';
import Dinner from './places/Dinner.jsx';

function SecondAccept(){
    const [movieTheater, setMovieTheater] = useState(false);
    const [arcade, setArcade] = useState(false);
    const [park, setPark] = useState(false);
    const [cafe, setCafe] = useState(false);
    const [dinner, setDinner] = useState(false);


    const handleMovieTheaterClick = () =>{
        setMovieTheater(true);
    }
    const handleArcade = () =>{
        setArcade(true);
    }
    const handlePark = () =>{
        setPark(true);
    }
    const handleCafe = () =>{
        setCafe(true);
    }
    const handleDinner = () =>{
        setDinner(true);
    }

    if(movieTheater){
        return <MovieTheater />;
    }
    if(arcade){
        return <Arcade />;
    }
    if(park){
        return <Park />;
    }
    if(cafe){
        return <Cafe />;
    }
    if(dinner){
        return <Dinner />;
    }

    return (
        <div className='Second-Accept'>
            <h1 className='YipeeWahoo'>Where should we go?</h1>
            <img className = 'Happy' src = {Happy}></img>
            <div className='button-container'>
                <button onClick= {handleMovieTheaterClick} className='movie-theater'>Movie Theater</button>
                <button onClick= {handleArcade} className='arcade'>Arcade?</button>
                <button onClick = {handlePark} className='park'>Walk in a Park?</button>
                <button onClick = {handleCafe} className='cafe'>Cafe?</button>
                <button onClick = {handleDinner} className='dinner'>Dinner?</button>
            </div>
        </div>
    );
}

export default SecondAccept;