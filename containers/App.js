import React, {Component} from 'react';
import OuterView from './views/outer-view';


require("./style.less");

export default class App extends Component {
    render () {
    	//console.log("Fish");
        return <OuterView/>;
    }
}