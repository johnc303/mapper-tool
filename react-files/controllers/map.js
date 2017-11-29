import React, {Component} from 'react';

import MapView from '../views/map';

export default class MapController extends Component
{
	render() {

		//console.log(OuterViewStyle);

		var _output = (
			 <MapView
			 		mapScale={this.props.mapScale}
			 		gridScale={this.props.gridScale}/>
		);
		return _output;
	}
}