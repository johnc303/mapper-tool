import React, {Component} from 'react';

import OuterView from '../views/outer';

require("../styles/styles.less");

export default class OuterController extends Component
{

	constructor(props) {
		super();
		
		this.state = {
			mapScale : '1',
			gridScale : '50'
		};
	}

	updateMapScale(_newSliderValue){
		console.log(_newSliderValue);
		this.setState({mapScale: _newSliderValue});
	}
	
	updateGridScale(_newSliderValue){
		console.log(_newSliderValue);
		this.setState({gridScale: _newSliderValue});
	}
	
	render() {
		//return (<p>Fishier?</p>);
		return <OuterView
					mapScale={this.state.mapScale}
					gridScale={this.state.gridScale}
					updateMapScale={this.updateMapScale.bind(this)}
					updateGridScale={this.updateGridScale.bind(this)}/>;
	}
}