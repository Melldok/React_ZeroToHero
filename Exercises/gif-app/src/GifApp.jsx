
import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) => {
        
        // Case sensitive array validation
        
        const isContained = categories.some(category => {
            return category.toLowerCase() === newCategory.toLowerCase();
          });

        if(isContained) return;
       
        setCategories([...categories, newCategory])

    }

    


  return (
    <>
        {/* Title */}
        <h1>GifApp</h1>

        {/* Input */}
        <AddCategory 
        //setCategories={setCategories}
            onNewCategory={onAddCategory}
        />
        {/* Gif Listing */}
        <ol>
            {categories.map(category => <li key={category}>{category}</li>)}
           
        </ol>
            {/* Gif item */}
    </>
  )
}
