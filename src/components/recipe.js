import React from 'react'

const Recipe=(props)=> {
    return (
        <div className="card " style={{width: "26rem", margin:"5px", padding:"5px"}}>
        <img className="card-img-top rounded" src={props.image} alt=""/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text"><strong>Calories value :</strong> {props.calories} <strong>kcal</strong></p>
            <p><strong>Ingredients: </strong> </p>
            <ul className="card-text">
                {props.ingredients.map((ingredient)=>(
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ul>
        </div>
        </div>
    )
}

export default Recipe
