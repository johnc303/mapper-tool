import React, {Component} from 'react';
import TokenIcon from '../controllers/token-icon';

export default class GridTileView extends Component
{
	_renderDroppedTokens(){

		let count = 0;
		let tokens = [];
		while (count < this.props.droppedTokens.length)
		{
			tokens.push(<TokenIcon key={count} token-data={this.props.droppedTokens[count].propsData['token-data']}/>);
			count++;
		}

		return tokens;
	}

	render() {

		const {sizes} = this.props;

		const _droppedTokens = this._renderDroppedTokens();

		console.log("TokenIcon render", this.props);

		const _output = (
			<span className="grid-tile" style={sizes}>{_droppedTokens}</span>
		);
		return _output;
	}
}