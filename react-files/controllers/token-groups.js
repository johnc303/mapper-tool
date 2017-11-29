import React, {Component} from 'react';

//import request from 'superagent';

import TokenGroupsView from '../views/token-groups';

export default class TokensGroups extends Component
{
	constructor(props){
		super(props);

		this.state = {
		};
	}

	componentDidMount(){
	}

	render() {

		//console.log(OuterViewStyle);

		var _output = (
			<TokenGroupsView token-data={this.props.sets}/>
		);
		return _output;
	}
}