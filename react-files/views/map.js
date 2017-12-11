import React, {Component} from 'react';

import GridTileController from '../controllers/grid-tile';

export default class MapView extends Component
{

	_renderGridTiles(){
		let count = 0;
		let tiles = [];
		//console.log(this.props.tileTotals);
		console.log("gridScale: " + this.props.gridScale);
		const _sizes = {width: this.props.gridScale + "px", height: this.props.gridScale + "px"};
		console.log("_sizes: ", _sizes);

		while (count < this.props.tileTotals.totalTiles && count < 100000)	// TODO Add better bounds checking than this!
		{
			tiles.push(<GridTileController sizes={_sizes} key={count} id={count}/>)
			count++;
		}
		return tiles;
	}

	render() {
		const _gridElements = this._renderGridTiles();

		var _output = (
			<div className="grid-element">
				{_gridElements}
			</div>
		);
		return _output;
	}
}