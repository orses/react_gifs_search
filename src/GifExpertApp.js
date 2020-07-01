import React, { useState } from 'react';
import { Addcategory } from './components/AddCategory';
import { Gifgrid as GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['computer']);

  // const handleAdd = () => {
  //   setCategories([...categories, 'HunterXHunter']);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <Addcategory setCategories={setCategories}></Addcategory>
      <hr />
      <ol>
        {categories.map(category => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
