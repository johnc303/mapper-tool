import React, {Component} from 'react';

import MapController from '../controllers/map';
import TokensHolderController from '../controllers/tokens-holder';
import ControlsController from '../controllers/controls';

require("../styles/styles.less");



export default class OuterView extends Component
{

	render() {

		//console.log(OuterViewStyle);

		var _output = (
			<div id='outerView'>
				<MapController mapScale={this.props.mapScale} gridScale={this.props.gridScale}/>
				<span id='tokensHolder' className="floatingControlGroup">
					<TokensHolderController/>
				</span>
				<span id='controlsHolder' className="floatingControlGroup">
					<ControlsController updateMapScale={this.props.updateMapScale} updateGridScale={this.props.updateGridScale}/>
				</span>
			</div>
		);
		return _output;
	}
}