import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExperApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

   /*  const handleAdd = () => {
        setCategories([...categories, 'Pepe caretón']);
    } */

    return (
        <>
            <h2>GiftExperApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />



            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>


        </>
    )
}

