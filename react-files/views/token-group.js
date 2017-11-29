import React, {Component} from 'react';

import TokenIcon from '../controllers/token-icon';

export default class TokenGroupView extends Component
{
	render() {

		//console.log(OuterViewStyle);
		//var _tokenGroups = [];
		//for (var i = 0; i < this.props['token-data'].length; i++ )
		//{
		//	_tokenGroups.push(<TokenGroup/>);
		//}

		var _tokens = [];

		if (this.props['group-data'])
		{
			for (var i = 0; i < this.props['group-data']['tokens'].length; i++ )
			{
				_tokens.push(<TokenIcon key={i} token-data={this.props['group-data']['tokens'][i]}/>);
			}
		}
		else
		{
			_tokens.push(<i key={0}>No tokens found.</i>);
		}


		var _output = (
			<div>
				Token group name: {this.props['group-data']['group-name']}
				{_tokens}
			</div>
		);
		return _output;
	}
}