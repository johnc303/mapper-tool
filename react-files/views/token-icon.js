import React, {Component} from 'react';

export default class TokenIconView extends Component
{

	/*
		{
			"name": "Token 1",
			"filepath": "images/tokens/token-set-1/monsters/monster-sprite-sheet-1.png",
			"sprite-width": 30,
			"sprite-height": 30,
			"sprite-top": 30,
			"sprite-left": 30,
			"token-width": 1,
			"token-height": 1
		},
	*/
	render() {

		const { isDragging, isDraglayer } = this.props;

		const _border = (isDraglayer ? '1px solid red' : '0px');

		console.log(_border);

		const _style = {
			backgroundImage: "url(" + this.props['token-data'].filepath + ")",
			backgroundPosition: this.props['token-data']['sprite-left'] + "px " + this.props['token-data']['sprite-top'] + "px",
			border: _border
		};

		const _output = (
			<div className="token-wrapper" style={_style}>
				<span className="token-title">{this.props['token-data'].name} {isDragging && ' (and I am being dragged now)'}</span>
			</div>
		);
		return _output;
	}
}