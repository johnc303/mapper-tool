import React, {Component} from 'react';

import request from 'superagent';

import TokensHolderView from '../views/tokens-holder';

export default class TokensHolderController extends Component
{
	constructor(props){
		super(props);

		this.state = {
			"tokens-data": []
		};
	}

	componentDidMount(){
		request
		  //.get('https://jsonplaceholder.typicode.com/posts/1')
		  .get('./test-data/tokens.json')
		  .query({}) // query string
		  .end((err, res) => {
		  	console.log(err, res);
		  	console.log(JSON.parse(res.text));
		    this.setState({"tokens-data": JSON.parse(res.text)});
		});
	}

	render() {

		//console.log(OuterViewStyle);


		var _output = (
			<TokensHolderView token-data={this.state['tokens-data']}/>
		);
		return _output;
	}
}