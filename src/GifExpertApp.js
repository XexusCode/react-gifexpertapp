import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => { 

    // const categories = ['One Punch', 'Naruto', 'One Piece']
    const [categories, setCategories] = useState(['willyrex'])

    // const handleAdd = () => {
    //     setCategories([...categories,'Hunter x Hunter']);
    // }
    return (

        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
        
            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                        key={ category } 
                        category={category}/> 
                        ))
                }
            </ol>
        </>

    )
}


export default GifExpertApp;