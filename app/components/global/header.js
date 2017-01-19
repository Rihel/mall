import React from 'react';
import {Link} from 'react-router'
export default class Header extends React.Component {
	constructor(...props){
		super(...props);
		this.state = {}
	}


	render(){
		let header = null;
		switch(this.props.type) {
			case "title":
				header = <Title
					title={this.props.title}
					lefticon={this.props.lefticon}
					seachicon={this.props.seachicon}
					path={this.props.path}
				/>;
				break;
		}
		return (
			<div className="header">
				{header}
			</div>
		)
	}
}
class Title extends React.Component {
	constructor(...props){
		super(...props)
	}

	render(){
		return (
			<ul className="title">
				<li style={{opacity : this.props.lefticon ? "1" : "0"}}><Link to={this.props.path}><i className="fa fa-angle-left"></i>
				</Link></li>
				<li>{this.props.title}</li>
				<li style={{opacity : this.props.seachicon ? "1" : "0"}}><i className="fa fa-search"></i></li>
			</ul>
		)
	}
}
