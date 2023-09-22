import React, {useState, useEffect} from 'react';


const Tasks = ({rightAnswers, 
        symbols,
        tasksCounter,
        setTasksCounter,
        setResultLight,

    }) => {

    function handleClick(symbol) {
        if (rightAnswers.indexOf(symbol) !== -1) {

        }
    }
    
    return (
        <div className="tasks__container">
            <form className="tasks__form">
                <div className='tasks__item'>
                    <input type="checkbox" id={symbols[0]} name="item" />
                    <label for={symbols[0]}>{symbols[0]}</label>
                </div>
                <div className='tasks__item'>
                    <input type="checkbox" id={symbols[1]} name="item" />
                    <label for={symbols[1]}>{symbols[1]}</label>
                </div>
                <div className='tasks__item'>
                    <input type="checkbox" id={symbols[2]} name="item" />
                    <label for={symbols[2]}>{symbols[2]}</label>
                </div>
                <div className='tasks__item'>
                    <input type="checkbox" id={symbols[3]} name="item" />
                    <label for={symbols[3]}>{symbols[3]}</label>
                </div>
                <div className='tasks__item'>
                    <input type="checkbox" id={symbols[4]} name="item" />
                    <label for={symbols[4]}>{symbols[4]}</label>
                </div>
                <div className='tasks__item'>
                    <input type="checkbox" id={symbols[5]} name="item" />
                    <label for={symbols[5]}>{symbols[5]}</label>
                </div>
                <div className='tasks__item'>
                    <input type="checkbox" id={symbols[6]} name="item" />
                    <label for={symbols[6]}>{symbols[6]}</label>
                </div>
                <div className='tasks__item'>
                    <input type="checkbox" id={symbols[7]} name="item" />
                    <label for={symbols[7]}>{symbols[7]}</label>
                </div>
                <div className='tasks__item'>
                    <input type="checkbox" id={symbols[8]} name="item" />
                    <label for={symbols[8]}>{symbols[8]}</label>
                </div>
                <div className='tasks__item'>
                    <input type="checkbox" id={symbols[9]} name="item" />
                    <label for={symbols[9]}>{symbols[9]}</label>
                </div>
                
            </form>
        </div>
    )
};

export default TestFirstStage;