import React from 'react';
import Header from '../global/header'
export default class Brand extends React.Component {
	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		return (
			<div>
				<Header type="title" lefticon={true} path="/user" title="银行卡管理"/>
				我的银行卡
			</div>
		)
	}
}