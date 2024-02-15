import ParkImg from '../assets/places/park.jpeg';

function Park(){
    return(
        <div className="Park">
            <h1>Wowwwww! Let's take some time to enjoy the beauty of nature (but you're even more beautiful heh heh)!</h1>
            <img src={ParkImg} className='park-image' />
        </div>
    );
}

export default Park;