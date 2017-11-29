import React, {Component} from 'react';

export default class MapView extends Component
{
	render() {

		//console.log(OuterViewStyle);

		var _gridStyle = {
			backgroundSize: this.props.gridScale + "px " + this.props.gridScale + "px"
		}

		var _output = (
			<div className="grid-element" style={_gridStyle}>
				<p>Map</p>
				<h1>{this.props.mapScale}</h1>
			</div>
		);
		return _output;
	}
}