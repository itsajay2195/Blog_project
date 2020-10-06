import React,{useContext} from 'react'
import {Text,View,StyleSheet,FlatList, Button} from 'react-native'
import BlogContext from '../Context/BlogContext'
// 


const IndexScreen=()=>{
    const {data,addBlogPosts} = useContext(BlogContext)
    return(
        <View>
        <Text>
            Welcome to the Index Screen 
        </Text>
        <Button title= "Click me" onPress={addBlogPosts}></Button>
        <FlatList
        data={data}
        renderItem={({item})=>{

            return <Text>{item.title}</Text>
        }
    }
        keyExtractor={(Item)=>Item.title}
        ></FlatList>
        
        </View>
    )
}

const style= StyleSheet.create({
    
})

export default IndexScreen;

