import React from 'react';
import Header from '../global/header'
export default class User extends React.Component {
	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		return (
			<div>

				{this.props.children}
			</div>
		)
	}
}