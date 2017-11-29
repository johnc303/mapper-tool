import React, {Component} from 'react';

//import request from 'superagent';

import TokenIconView from '../views/token-icon';

export default class TokenIcon extends Component
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
			<TokenIconView token-data={this.props['token-data']}/>
		);
		return _output;
	}
}