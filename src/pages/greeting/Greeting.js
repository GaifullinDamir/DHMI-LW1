import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { HYPHOTHESIS_ONE_ROUTE } from "../../utils/consts";

const Greeting = ({handleChangeUsername, handleChangeGroupNumber}) => {

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(HYPHOTHESIS_ONE_ROUTE);
    }
    return(
        <div>
            <form className='greeting-form' onSubmit={handleSubmit}>
                <input required placeholder="Ваше имя" type="text" onChange={e => handleChangeUsername(e.target.value)}/>
                <input required placeholder="Ваше группа" type="text" onChange={e => handleChangeGroupNumber(e.target.value)}/>
                <button class="button button_submit">Начать тестирование</button>
            </form>
        </div>
    )
};

export default Greeting;