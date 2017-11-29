import React, {Component} from 'react';

//import request from 'superagent';

import TokenGroupView from '../views/token-group';

export default class TokensGroup extends Component
{
	constructor(props){
		super(props);

		this.state = {
		};
	}

	componentDidMount(){
	}

	render() {
		var _output = (
			<TokenGroupView group-data={this.props['group-data']}/>
		);
		return _output;
	}
}