import React from "react"


// declare variables: _title and _color
// deploy submit function:
// prevent default
//  run the new color function with _title.value and color.value as arguments
//	clear ther variables
//return jsx
// 	on input fiels ref runs the function:
//		ref = input=>color=input
const AddColorForm = ({onNewColor})=>{
	let _title, _color

	const submit = (e)=>{
		e.preventDefault()
		onNewColor(_title.value, _color.value)
		_title.value = ""
		_color.value = "#8888ff"
		_title.focus()
	}
	return (
		<form onSubmit = {submit}>
			<input type="text" placeholder="Color name" ref={input=>_title=input} required/>
			<input type="color" ref={input=>_color=input} required/>
			<button>Add Color </button>
		</form>
		)
}
export default AddColorForm