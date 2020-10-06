import React, {useState} from 'react';

const BlogContext =React.createContext() ;


export const BlogProvider=({children})=>{
    const [Blogposts,setBlogPosts] = useState([])

    const addBlogPosts=()=>{
        setBlogPosts = ()=>{
            [...Blogposts,{tite:`this is my Blogpost ${Blogposts.length+1}`}]
        }
    }
    return(
        <BlogContext.Provider value ={{data:Blogposts,addBlogPosts}}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext;