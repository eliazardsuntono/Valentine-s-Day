import ArcadeImg from '../assets/places/arcade.jpeg';

function Arcade(){
    return (
        <div className='Arcade'>
            <h1>Hoooooorayyyyyyyy! Time to play until our thumbs fall off! :3</h1>
            <img className='arcade-img' src={ArcadeImg} />
        </div>
    );
}

export default Arcade;