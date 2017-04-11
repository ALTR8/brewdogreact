import React, { Component } from 'react'
import '../App.css';

export default class ShowDetails extends Component {

	render(){
		return(
		<div className="beerInfo">
        	<div className="description"> {this.props.beer.description} </div>
        	<div className="smallDetails"> abv: {this.props.beer.abv} first brewed: {this.props.beer.first_brewed} </div>
        	<div className="foodPairing">food pairing suggestions: {this.props.beer.food_pairing[0]}, {this.props.beer.food_pairing[1]}, {this.props.beer.food_pairing[2]} </div>
     	</div>

		)
	}
}




//  let markup
//     if (this.state.showDetails){
//       markup = <div className="beerInfo">
//         <div className="description"> {this.props.beer.description} </div>
//         <div className="smallDetails"> abv: {this.props.beer.abv} first brewed: {this.props.beer.first_brewed} </div>
//         <div className="foodPairing">food pairing suggestions: {this.props.beer.food_pairing[0]}, {this.props.beer.food_pairing[1]}, {this.props.beer.food_pairing[2]} </div>
//       </div>
//     } else {
//       markup
//     }
//     return (
//       markup
//     )
//   }

// }
   