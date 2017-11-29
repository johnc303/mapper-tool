import React, {Component} from 'react';

import ControlsView from '../views/controls';

export default class ControlsController extends Component
{
	render() {

		//console.log(OuterViewStyle);

		var _output = (
			<ControlsView
				updateMapScale={this.props.updateMapScale}
				updateGridScale={this.props.updateGridScale}/>
		);
		return _output;
	}
}