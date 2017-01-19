import React from 'react';
import Header from '../global/header'
import Slider from '../global/slider'
import $ from 'jquery'
export default class Main extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			slider :[]
		}
	}
	loadData(){
		$.ajax({
			url:'data.json',
			type:'GET',
			datatype:'json',
			success:data=>{
				this.setState({
					slider:data.banner
				})
			}
		})
	}
	componentDidMount(){
		this.loadData();
	}
	render(){
		return (
			<div>
				<Header type="title" title="首页"/>
				<Slider data={this.state.slider}
						speed={1.2}
						delay={2.1}
						pause={true}
						autoplay={true}
						dots={true}
						arrows={true}
				/>
			</div>
		)
	}

}