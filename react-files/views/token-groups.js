import React, {Component} from 'react';

import TokenGroup from '../controllers/token-group';

export default class TokenGroupsView extends Component
{
	render() {

		//console.log(OuterViewStyle);
		var _tokenGroups = [];

		if (this.props['token-data'])
		{
			for (var i = 0; i < this.props['token-data'].length; i++ )
			{
				_tokenGroups.push(<TokenGroup key={i} group-data={this.props['token-data'][i]}/>);
			}
		}
		else
		{
			_tokenGroups.push(<i key={0}>No groups found.</i>);
		}

		var _output = (
			<div>
				{_tokenGroups}
			</div>
		);
		return _output;
	}
}