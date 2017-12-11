import React, {Component} from 'react';
import Measure from 'react-measure'

import MapView from '../views/map';

export default class MapController extends Component
{
	constructor(props){
		super(props);

		this.state = {
			dimensions: {
		    	width: -1,
		    	height: -1
		    }
		};
	}

	_getTileTotals(){
		const _totalHorizontal = Math.floor(this.state.dimensions.width / parseInt(this.props.gridScale));
		const _totalVertical = Math.floor(this.state.dimensions.height / parseInt(this.props.gridScale));
		return {
			totalTiles: _totalHorizontal * _totalVertical,
			totalHorizontal: _totalHorizontal,
			totalVertical: _totalVertical
		};
	}

	render() {

		console.log(this.state);

		const _tileTotals = this._getTileTotals();

		var _output = (
			<Measure
			        bounds
			        onResize={
			        	(contentRect) => {this.setState({ dimensions: contentRect.bounds })}
			        }>
				{
					({ measureRef }) =>
					<span id='mapHolder' ref={measureRef}>
						<MapView				 		
					 		mapScale={this.props.mapScale}
					 		gridScale={this.props.gridScale}
					 		tileTotals={_tileTotals}/>
					</span>
				}
			 </Measure>
		);
		return _output;
	}
}