import React, {useState} from 'react';

const Greeting = () => {

    const {username, setUsername} = useState('');
    const {groupNumber, setGroupNumber} = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <div>
            <form className='greeting-form' onSubmit={handleSubmit}>
                <input required placeholder="Ваше имя" type="text" onChange={e => setUsername(e.target.value)}/>
                <input required placeholder="Ваше группа" type="text" onChange={e => setGroupNumber(e.target.value)}/>
                <button class="button button_submit">Начать тестирование</button>
            </form>
        </div>
    )
};

export default Greeting;