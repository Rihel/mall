import React from 'react';
import Header from '../global/header'
export default class ShoppingCar extends React.Component {
	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		return (
			<div>
				<Header type="title" title="购物车"/>
			</div>
		)
	}
}