import React, {useEffect, useState}  from 'react';

import './App.css'


import Recipe from './components/recipe'

const axios=require("axios")


const App =props=>{
  
  const [recipes, setRecipes]= useState([]);
  const [search, setSearch]= useState('');
  const [query, setQuery]= useState('cake');

  const url ="http://localhost:3000/cakes" 
  
  useEffect(()=>{
    getRecipes();
    console.log("fetching")
  },[query])

  const getRecipes = ()=>{
    axios
      .get(url)
      .then(response=> {
        setRecipes(response.data)
      })
      .catch(error => {
        console.log(error);
      }) 
  
  }

  const onChangeValue=(e)=>{
    e.preventDefault()
    setSearch(e.target.value)
    console.log(search)
  }

  const getSearch=(e)=>{
    e.preventDefault();
    setQuery(search)
  }
    return (
      <div className="App">
        <h1 class="display-2 text-center"><strong>Cake Recipes</strong></h1>
        <form className="input-group" onSubmit={getSearch} >
          <input className="form-control" type="text" value={search} onChange={onChangeValue}/>
          <button className="btn btn-primary" type="submit"> search </button>
        </form>
        <div className="row">
          {
            recipes.map((recipe,index)=>(
              <Recipe key={index} title={recipe.label} calories={recipe.calories} image={recipe.image} ingredients={recipe.ingredients} />  
            ))
        }
        </div>
      </div>
    );
  
}

export default App;
