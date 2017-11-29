import React, {Component} from 'react';

import TokenGroups from '../controllers/token-groups';

export default class TokensHolderView extends Component
{
	render() {

		//console.log(OuterViewStyle);

		var _output = (
			<div>
				<div>Set name: {this.props['token-data']['token-set-name']}</div>
				<div id="token-sets-wrapper">
					<TokenGroups sets={this.props['token-data']['token-groups']}/>
				</div>
			</div>
		);
		return _output;
	}
}