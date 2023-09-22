import React, {useState, useEffect} from 'react';
import TestFirstStage from './TestFirstStage';

const HyphothesisOne = ({resultFirst, setResult}) => {

    return(
        <div>
            <div className="test">
                <TestFirstStage resultFirst={resultFirst} setResult={setResult}/>
            </div>
        </div>
    )
};

export default HyphothesisOne;