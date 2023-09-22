import React, {useState, useEffect} from 'react';


const Tasks = ({rightAnswers, 
        symbols,
        tasksCounter,
        setTasksCounter,
        setResultLightTrue,
        resultLightTrue,
        setResultLightFalse,
        resultLightFalse,
        setResultDarkTrue,
        resultDarkTrue,
        setResultDarkFalse,
        resultDarkFalse
    }) => {

    const [answers, setAnswers] = useState([]);
    const [checkCounter, setCheckCounter] = useState(0);

    function handleCheckboxChange(symbol) {
        setAnswers([...answers, symbol]);
    }

    function handleSubmit() {
        const successCounter = 0;
        for (var i = 0; i < answers.length; i++) {
            if (rightAnswers.indexOf(answers[i]) !== -1) {
                tasksCounter < 3 ? setResultLightTrue(resultLightTrue + 1) : setResultDarkTrue(resultDarkTrue + 1);
            } else {
                tasksCounter < 3 ? setResultLightFalse(resultLightFalse + 1) : setResultDarkFalse(resultDarkFalse + 1);
            }
        }
    }

    return (
        <div className="tasks__container">
            <form className="tasks__form">
                <div className='tasks__item'>
                    <input type="checkbox" id={symbols[0]} name="item" onChange={() => handleCheckboxChange(symbols[0])} />
                    <label for={symbols[0]}>{symbols[0]}</label>
                </div>
                <div className='tasks__item'>
                    <input type="checkbox" id={symbols[1]} name="item" onChange={() => handleCheckboxChange(symbols[1])}/>
                    <label for={symbols[1]}>{symbols[1]}</label>
                </div>
                <div className='tasks__item'>
                    <input type="checkbox" id={symbols[2]} name="item" onChange={() => handleCheckboxChange(symbols[2])}/>
                    <label for={symbols[2]}>{symbols[2]}</label>
                </div>
                <div className='tasks__item'>
                    <input type="checkbox" id={symbols[3]} name="item" onChange={() => handleCheckboxChange(symbols[3])}/>
                    <label for={symbols[3]}>{symbols[3]}</label>
                </div>
                <div className='tasks__item'>
                    <input type="checkbox" id={symbols[4]} name="item" onChange={() => handleCheckboxChange(symbols[4])}/>
                    <label for={symbols[4]}>{symbols[4]}</label>
                </div>
                <div className='tasks__item'>
                    <input type="checkbox" id={symbols[5]} name="item" onChange={() => handleCheckboxChange(symbols[5])}/>
                    <label for={symbols[5]}>{symbols[5]}</label>
                </div>
                <div className='tasks__item'>
                    <input type="checkbox" id={symbols[6]} name="item" onChange={() => handleCheckboxChange(symbols[6])}/>
                    <label for={symbols[6]}>{symbols[6]}</label>
                </div>
                <div className='tasks__item'>
                    <input type="checkbox" id={symbols[7]} name="item" onChange={() => handleCheckboxChange(symbols[7])}/>
                    <label for={symbols[7]}>{symbols[7]}</label>
                </div>
                <div className='tasks__item'>
                    <input type="checkbox" id={symbols[8]} name="item" onChange={() => handleCheckboxChange(symbols[8])}/>
                    <label for={symbols[8]}>{symbols[8]}</label>
                </div>
                <div className='tasks__item'>
                    <input type="checkbox" id={symbols[9]} name="item" onChange={() => handleCheckboxChange(symbols[9])}/>
                    <label for={symbols[9]}>{symbols[9]}</label>
                </div>
                <div>
                    <button onSubmit={handleSubmit}>Ответить</button>
                </div>
            </form>
        </div>
    )
};

export default Tasks;