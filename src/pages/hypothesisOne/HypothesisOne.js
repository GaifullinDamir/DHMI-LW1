import React, {useState, useEffect} from 'react';
import TestFirstStage from './TestFirstStage';
import './test.scss';

const HyphothesisOne = ({resultFirst, setResult}) => {
    const [rightAnswers, setRightAnswers] = useState([]);
    const [tasksCounter, setTasksCounter] = useState(0);
    const [resultLightTrue, setResultLightTrue] = useState(0);
    const [resultLightFalse, setResultLightFalse] = useState(0);
    const [resultDarkTrue, setResultDarkTrue] = useState(0);
    const [resultDarkFalse, setResultDarkFalse] = useState(0);

    const symbols = [587,  431, 861, 902, 213, '✎','✐', '❆', '☾', '♡'];

    return(
        <TestFirstStage 
            rightAnswers={rightAnswers} 
            setRightAnswers={setRightAnswers} 
            symbols={symbols}
            tasksCounter={tasksCounter}
            setTasksCounter={setTasksCounter}
            />
        
    )
};

export default HyphothesisOne;