import React, { useState } from 'react';
import SecondRejectionImage from './assets/crying.gif';
import SecondAccept from './SecondAccept';
import SecondReject from './SecondReject';

function FirstQuestion(){
    const [accepted, setAccepted] = useState(false);
    const [rejected, setRejected] = useState(false);

    const handleYesClick = () => {
        setAccepted(true);
    }

    const handleNoClick = () => {
        setRejected(true);
    }

    if (accepted) {
        return <SecondAccept />;
    }

    if (rejected) {
        return <SecondReject />;
    }

    return(
        <div className='Second-Reject'>
            <h1 className='Second-Reject-Header'>Are you really sure?????</h1>
            <img src={SecondRejectionImage} className='Second-Reject-Image'></img>
            <button className='NVM-1' onClick={handleYesClick}>Of course not! I could never say no to you!</button>
            <button className='no-2' onClick={handleNoClick}>Yes.</button>
        </div>
    );
}

export default FirstQuestion;
