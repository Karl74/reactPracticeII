import React from "react"
import StarRating from "./StarRating"

const Color =({title, color, rating, onRemove=f=>f, onRate=f=>f})=>
	<section className="colorBox">
		<h1>{title}</h1>
		<button onClick={onRemove}>X</button>
		<div className="color" style={{background:color}}></div>
		<div>
			<StarRating starsSelected={rating} onRate={onRate}/>
		</div>
	</section>

export default Color 
