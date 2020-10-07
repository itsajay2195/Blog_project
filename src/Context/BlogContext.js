import React, {useReducer} from 'react';

const BlogContext =React.createContext() ;


const blogReducer = (state,action)=>{

    switch(action.type){
        case 'add_bp':
            return [...state,{title:`Blogspot # ${state.length +1}`}];
        
        default :
            return state;
    }

}

export const BlogProvider=({children})=>{
    // user reducer syntax
    //1. accpets 2 args.
    //a.1st arg- state variable
    //b.2st arg- initial data of the state
    const [blogposts,dispatch] = useReducer(blogReducer,[])

    const addBlogPosts = ()=>{
        dispatch({type:'add_bp'})
    }

   
    return(
        <BlogContext.Provider value ={{data:blogposts,addBlogPosts}}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;