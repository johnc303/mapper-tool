import React, {Component} from 'react';
import {OuterViewStyle} from '../styles/styles';


export default class OuterView extends Component
{
	render() {

		console.log(OuterViewStyle);

		var _output = (
			<div style={OuterViewStyle['outer-view']}>
				<span style={OuterViewStyle['tokens-holder']}>Fish</span>
				<span style={OuterViewStyle['map-holder']}>Frog</span>
				<span style={OuterViewStyle['controls-holder']}>Fowl</span>
			</div>
		);
		return _output;
	}
}