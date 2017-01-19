import React from 'react';
import Header from '../global/header'
export default class Money extends React.Component {
	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		return (
			<div>
				<Header type="title" lefticon={true} path="/user" title="提现管理"/>
				Money
			</div>
		)
	}
}