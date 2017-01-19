import React from 'react';
import { Router, Route, hashHistory,IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';



import Index from './components/index'
import Main from './components/main/main'

import Classify from './components/classify/classify'
import ShoppingCar from './components/shoppingcar/shoppingcar'
import User from './components/user/user'
import Brand from './components/user/brand'
import Money from './components/user/money'
import Usermain from './components/user/usermain'
require('../node_modules/font-awesome/scss/font-awesome.scss')
require('./scss/main.scss')


let app=document.createElement('div');
document.body.appendChild(app);
let meta=document.createElement('meta');
meta.setAttribute('name','viewport')
meta.setAttribute('content','width=device-width,initial-scale=1,user-scalabel=no')
document.head.appendChild(meta);



ReactDOM.render((
	<Router history={hashHistory}>

		<Route path="/" component={Index}>
			<IndexRoute components={Main}/>
			<Route path='/main' component={Main}/>
			<Route path='/classify' component={Classify}/>
			<Route path='/shoppingcar' component={ShoppingCar}/>
			<Route path='/user' component={User}>
				<IndexRoute components={Usermain}/>
				<Route path='/brank' components={Brand}/>
				<Route path='/money' components={Money}/>
			</Route>
		</Route>
	</Router>
), app);
