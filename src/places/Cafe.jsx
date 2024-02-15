import CafeImg from '../assets/places/cafe.jpeg';

function Cafe(){
    return(
        <div className="Cafe">
            <h1>Hooray! It's time to drink coffee and stay up allll night :3</h1>
            <img className='cafe-img' src={CafeImg} />
        </div>
    );
}

export default Cafe;