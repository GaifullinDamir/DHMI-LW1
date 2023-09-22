import React, {useState, useEffect} from 'react';
import './test.scss';

const TestFirstStage = ({resultFirst, setResult}) => {
    
    const [successNumb, setSuccessNumb] = useState();
    const [rightAnswers, setRightAnswers] = useState([0, 1, 2, 3]);

    const symbols = [587,  431, 861, 902, 213, '✎','✐', '❆', '☾', '♡'];

    function getRandom(min, max) {
        return Math.floor(Math.random () * (max - min + 1)) + min;
    };

    function getRandomArray() {
        const rightAnswersArray = [];

        while (rightAnswersArray.length != 4) {
            const symbol = symbols[getRandom(0, 9)];
            if(rightAnswersArray.indexOf(symbol) === -1) {
                console.log(symbol)
                rightAnswersArray.push(symbol);
            }
        }

        return rightAnswersArray;
    };

    useEffect(() => {
        setSuccessNumb(getRandom(0, 3));
        setRightAnswers(getRandomArray());
    }, []);
    
    function changeResult(){
        setResult(resultFirst => resultFirst + 1);
    }
    function handleClick(numb) {
        if (numb === successNumb) {
            changeResult();
        } 
    };
    
    return (
        <div>
            <div className={successNumb === 0 ? 'test-item_success' : 'test-item'} onClick={() => handleClick(0)}>
                {rightAnswers[0]}
            </div>
            <div className={successNumb === 1 ? 'test-item_success' : 'test-item'} onClick={() => handleClick(1)}>
                {rightAnswers[1]}
            </div>
            <div className={successNumb === 2 ? 'test-item_success' : 'test-item'} onClick={() => handleClick(2)}>
                {rightAnswers[2]}
            </div>
            <div className={successNumb === 3 ? 'test-item_success' : 'test-item'} onClick={() => handleClick(3)}>
                {rightAnswers[3]}
            </div>
        </div>
    )
};

export default TestFirstStage;