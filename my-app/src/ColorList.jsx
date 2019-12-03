import React from "react"
import Color from "./Color"

const ColorList = ({colors=[], onRate=f=>f, onRemove=f=>f})=>
	<div className="color-list">
		{(colors.length ===0)?
			<p>No colors listed. Add a color</p>:
			colors.map((color)=>
				<Color key={color.id}
					   {...color}
					   onRate={(rat)=> onRate(color.id, rat)}
					   onRemove={()=>onRemove(color.id)}	/>
		)} 
	</div>	 

export default ColorList	

//Creates a div className color-list

// evaluates if the array colors is empty

// return a message 

// returns a color component with properties 