import {useContext,useReducer} from 'react';
import React from 'react';


export default(reducer,action,intialState)=>{
    const Context = React.createContext();

    const Provider =({children})=>{
        const [state,action] = useReducer(intialState);

        return(
            <context.Provider value= {{state}}>
                {children}
            </context.Provider>
        )


    };


return {Context,Provider} 
};