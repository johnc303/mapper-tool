import React, {Component} from 'react';

import ScaleView from '../views/scale-wrapper';

export default class ControlsController extends Component
{

	render() {

		var _output = (
			<ScaleView onChange={this.props.updateScale}/>
		);
		return _output;
	}
}