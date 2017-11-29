import React, {Component} from 'react';
import ScaleWrapper from '../controllers/scale-wrapper';

export default class ControlsView extends Component
{

	render() {

		//console.log(OuterViewStyle);

		var _output = (
			<div>
				<p>Controls</p>
				<span>Map scale:</span> <ScaleWrapper updateScale={this.props.updateMapScale}/>
				<span>Grid scale:</span> <ScaleWrapper updateScale={this.props.updateGridScale}/>
			</div>
		);
		return _output;
	}
}