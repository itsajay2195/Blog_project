import React, {useReducer} from 'react';
import createDataContext from './createDataContext';




const blogReducer = (state,action)=>{

    switch(action.type){
        case 'add_bp':
            return [...state,{title:`Blogspot # ${state.length +1}`}];
        
        default :
            return state;
    }

}
const addBlogPosts = ()=>{
    dispatch({type:'add_bp'})
}


export const {Context,Provider}= createDataContext();