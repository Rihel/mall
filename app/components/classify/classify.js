import React from 'react';
import Header from '../global/header'
export default class Classify extends React.Component {
	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		return (
			<div>
				<Header type="title" title="商品分类"/>
			</div>
		)
	}
}