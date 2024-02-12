import React from 'react';
import loveydovey from './assets/loveydovey.jpeg';
import { useHistory } from 'react-router-dom';

function FirstQuestion(){
    const history = useHistory();

    const handleYesClick = () => {
        history.push('/FirstYes');
    };

    const handleNoClick = () => {
        history.push('/FirstNo');
    };

    return(
        <div className='First-Question'>
            <img className="first-picture" src={loveydovey} alt="Lovey Dovey"></img>
            <button className='yes_1' onClick={handleYesClick}>Yes?</button>
            <button className='no_2' onClick={handleNoClick}>No?</button>
        </div>
    );
}

export default FirstQuestion;
