import React from 'react';
import {Link} from 'react-router'
import Header from './global/header'
export default class Index extends React.Component {
	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		return (
			<div>
				<div className="main">

					{this.props.children}
				</div>
				<div className="footer">
					<ul className="nav">
						<li>
							<Link to="/main" activeClassName="active">
								<i className="fa fa-home"></i>
								<p>首页</p>
							</Link>
						</li>
						<li>
							<Link to="/classify" activeClassName="active">
								<i className="fa-reorder fa"></i>
								<p>分类</p>
							</Link>
						</li>
						<li>
							<Link to="/shoppingcar" activeClassName="active">
								<i className="fa fa-shopping-cart"></i>
								<p>购物车</p>
							</Link>
						</li>
						<li>
							<Link to="/user" activeClassName="active">
								<i className="fa fa-user "></i>
								<p>我</p>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}