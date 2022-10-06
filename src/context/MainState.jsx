import React from 'react';
import MainContext from './MainContext';

const MainState = (props) => {

    return (
        <>
            <MainContext.Provider value={{}}>
                {props.children}
            </MainContext.Provider>
        </>
    )
}

export default MainState;
