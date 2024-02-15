import MovieTheaterImg from '../assets/places/movie-theater.jpeg';

function MovieTheater(){
    return(
        <div className='Movie-Theater'>
            <h1>YIPEEEEEE! Text me the movie you'd like see :3</h1>
            <img src = {MovieTheaterImg} className='Movie-Theater-Img' />
        </div>
    );
}

export default MovieTheater;