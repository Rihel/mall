import React from 'react';
import Header from '../global/header'
import {Link} from 'react-router'
export default class Usermain extends React.Component {
	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		return (
			<div>
				<Header type="title" lefticon={true} path="/" title="用户中心"/>
				<div className="user-face">

				</div>
				<ul className="user-nav">
					<li>
						<Link to="/brank">银行</Link>
					</li>
					<li>
						<Link to="/money">提现</Link>
					</li>
				</ul>
			</div>
		)
	}
}