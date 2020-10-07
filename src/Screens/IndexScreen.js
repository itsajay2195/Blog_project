import React,{useContext} from 'react'
import {Text,View,StyleSheet,FlatList, Button} from 'react-native'
import BlogContext from '../Context/BlogContext'
// 


const IndexScreen=()=>{
    const {data,addBlogPosts} = useContext(BlogContext)
    console.warn(data)
    return(
        <View>
        <Text>
            Welcome to the Index Screen 
        </Text>
        <Button title= "Add Post" onPress={addBlogPosts}></Button>
        <FlatList
        data={data}
        keyExtractor={(blogpost)=>blogpost.title}
        renderItem={({item})=>{

            return <Text>HI {item.title}</Text>
        }
    }
        
        />
        
        </View>
    )
}

const style= StyleSheet.create({
    
})

export default IndexScreen;

