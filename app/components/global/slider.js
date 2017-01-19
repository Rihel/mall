import React from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery'
export default class Slider extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			nowLocal: 0,
		}
	}

	// 向前向后多少
	turn(n) {
		var _n = this.state.nowLocal + n;
		if(_n < 0) {
			_n = _n + this.props.data.length;
		}
		if(_n >= this.props.data.length) {
			_n = _n - this.props.data.length;
		}
		this.setState({nowLocal: _n});
	}

	// 开始自动轮播
	goPlay() {
		if(this.props.autoplay) {
			this.autoPlayFlag = setInterval(() => {
				this.turn(1);
			}, this.props.delay * 1000);
		}
	}

	// 暂停自动轮播
	pausePlay() {
		clearInterval(this.autoPlayFlag);
	}
	componentDidMount() {
		this.goPlay();
	}



	render(){
		let winW  = window.screen.width,
			count = this.props.data.length;

		return (
			<div className="slider">
				<ul ref="imgs" style={{
					left: -100 * this.state.nowLocal + "%",
					transitionDuration: this.props.speed + "s",
					width: count * 100 + "%"
				}}>
					{
						this.props.data.map((item, index)=>{
							console.log(`开始渲染第${index}个图片`)
							return <Item item={item}
										 ref={`item${index}`}
										 key={`item${index}`}
										 count={count}
										 showModal={this.showModal}
							/>
						})
					}
				</ul>
				<ol>
					{
						this.props.data.map((item, index)=>{
							return <li key={`control-${index + 1}`}>

							</li>
						})
					}
				</ol>
				<div className="btn prex">
					<i className="fa fa-angle-left"></i>
				</div>
				<div className="btn next">
					<i className="fa fa-angle-right"></i>
				</div>
			</div>
		)
	}
}
class Item extends React.Component {
	constructor(...props){
		super(...props);
	}

	render(){

		let {count, item} = this.props;
		let width = 100 / count + '%';
		return (
			<li style={{width : width}} >
				<img src={item.url} alt="" />
			</li>
		)
	}
}