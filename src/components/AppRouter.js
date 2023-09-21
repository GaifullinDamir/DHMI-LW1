import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { publicRoutes } from '../routes';
import { GREETING_ROUTE } from '../utils/consts';

const AppRouter = () => {

    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>{
                return(
                    <Route exact key={path} path={path} element={<Component/>} />
                )
            })}
            <Route path="*" element={<Navigate to={GREETING_ROUTE}/>}/>
        </Routes>
    );
}

export default AppRouter;