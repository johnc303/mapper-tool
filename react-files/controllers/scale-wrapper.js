import React, {Component} from 'react';

import ScaleView from '../views/scale-wrapper';

export default class ControlsController extends Component
{

	render() {

		var _output = (
			<ScaleView
					startValue={this.props.startValue}
					minValue={this.props.minValue}
					maxValue={this.props.maxValue}
					stepSize={this.props.stepSize}
					onChange={this.props.updateScale}/>
		);
		return _output;
	}
}