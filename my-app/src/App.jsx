import React from 'react'
import {v4} from 'uuid'

import AddColorForm  from './AddColorForm'
import ColorList from './ColorList'

class App extends React.Component{
  constructor(props){
    super(props)
      this.state = {colors:[]}
      this.logColor = this.logColor.bind(this)
      this.rateColor = this.rateColor.bind(this)
      this.removeColor = this.removeColor.bind(this)
  }

  logColor(title, color){
     const colors = [...this.state.colors,
                      {
                        id:v4(),
                        title,
                        color,
                        rating:0
                      }
                    ]
     this.setState({colors:colors})
  }

  rateColor(id, rating){
    const colors = this.state.colors.map(color=>
        (color.id !== id)?
        color:
        {...color, rating}
      )
    this.setState({colors})
  }

  removeColor(id){
    const colors = this.state.colors.filter(color=> color.id !== id)
    this.setState({colors})
  }

  render(){
    const {colors} = this.state
    const {rateColor, removeColor, logColor} = this
    return(
      <div className="app">
        <AddColorForm onNewColor={logColor}/>
        <ColorList colors={colors} onRate={rateColor} onRemove={removeColor}/>
      </div>
      )
  }

}

export default App