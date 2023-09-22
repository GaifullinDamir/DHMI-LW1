import React, {useState, useEffect} from 'react';


const Tasks = ({rightAnswers, 
        setRightAnswers, 
        symbols,
        tasksCounter,
        setTasksCounter
    }) => {

    

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
        setRightAnswers(getRandomArray());
    }, []);
    
    return (
        <div className="test__container">
            <div className="test">
                <div className={tasksCounter < 3 ? 'test__item' : 'test__item_dark'}>
                    {rightAnswers[0]}
                </div>
                <div className={tasksCounter < 3 ? 'test__item' : 'test__item_dark'}>
                    {rightAnswers[1]}
                </div>
                <div className={tasksCounter < 3 ? 'test__item' : 'test__item_dark'}>
                    {rightAnswers[2]}
                </div>
                <div className={tasksCounter < 3 ? 'test__item' : 'test__item_dark'}>
                    {rightAnswers[3]}
                </div>
            </div>
        </div>
    )
};

export default TestFirstStage;